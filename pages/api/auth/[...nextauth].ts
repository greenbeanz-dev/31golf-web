import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import prisma from "../../../src/lib/prisma";

const TEMP_PHONE_NUMBER = "010634887983";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    phone: string;
  }
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user:
      | {
          phone: string;
          email: string;
          id: string;
          name: string;
          provider?: string;
        }
      | undefined;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "이름", type: "text" },
        phone: { label: "휴대폰번호", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);
        if (credentials !== undefined) {
          const response = await prisma.customer.findMany({
            where: {
              name: credentials.name,
              phone: credentials.phone,
            },
          });
          // 가장 큰 customer.id로 정렬
          if (response && response.length > 0) {
            const recentCustomer = response.sort(
              (a, b) => Number(b.id) - Number(a.id)
            );
            return {
              id: recentCustomer[0].id,
              name: recentCustomer[0].name,
              email: recentCustomer[0].email,
              phone: recentCustomer[0].phone,
              image: "",
            };
          }
        }
        throw new Error("로그인 실패");
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.kakao_account.profile.nickname,
          email: profile.kakao_account.email,
          image: profile.kakao_account.profile.profile_image_url,
          phone: profile.kakao_account.phone_number,
        };
      },
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.response.id,
          name: profile.response.nickname,
          email: profile.response.email,
          image: profile.response.profile_image,
          phone: profile.response.mobile,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      // TODO 휴대폰 번호 없는 경우 페이지 회원가입 페이지로 리다이렉트
      console.log("Signing in:", account);
      console.log("Signing profile:", profile);
      // if (account && account.provider === "kakao") {
      //   if (profile && !(profile as any).kakao_account.phone_number) {
      //     const error = "필수 정보 누락"; // 사용자 정의 에러 메시지
      //     throw new Error(error + "&callbackUrl=/signup");
      //   }
      // }
      return true;
    },

    async session({ session, user, token }) {
      if (token && token.name && token.phone) {
        const response = await prisma.customer.findMany({
          where: {
            name: token.name,
            phone: token.phone,
          },
        });

        if (response && response.length > 0) {
          const recentCustomer = response.sort(
            (a, b) => Number(b.id) - Number(a.id)
          );

          return {
            ...session,
            user: {
              id: recentCustomer[0].id.toString(),
              name: recentCustomer[0].name,
              email: recentCustomer[0].email,
              phone: recentCustomer[0].phone,
              provvider: recentCustomer[0].provider,
              image: "",
            },
          };
        } else {
          const newCustomer = await prisma.customer.create({
            data: {
              name: token.name,
              phone: token.phone as string,
              email: token.email,
            },
          });
          return {
            ...session,
            user: {
              id: newCustomer.id.toString(),
              name: newCustomer.name,
              email: newCustomer.email,
              phone: newCustomer.phone,
              provvider: newCustomer.provider,
              image: "",
            },
          };
        }
      }
      return {};
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        if (
          account.provider === "kakao" &&
          profile &&
          (profile as any).kakao_account &&
          (profile as any).kakao_account.phone_number
        ) {
          token.phone = (profile as any).kakao_account.phone_number;
        }

        if (
          account.provider === "naver" &&
          profile &&
          (profile as any).response &&
          (profile as any).response.mobile
        ) {
          token.phone = (profile as any).response.mobile;
        }
      }
      token.phone = TEMP_PHONE_NUMBER;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
