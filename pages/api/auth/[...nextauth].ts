import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import prisma from "../../../src/lib/prisma";

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
          phone: "",
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
          phone: "",
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return true;
    },

    async session({ session, user, token }) {
      console.log({ session, user, token });
      if (token) {
        const response = await prisma.customer.findUnique({
          where: {
            id: token.sub,
          },
        });

        return {
          ...session,
          user: {
            id: response.id.toString(),
            provider: response.provider,
            name: response.name,
            phone: response.phone,
          },
        };
      }
      const response = await prisma.customer.findMany({
        where: {
          provider: user.id || null,
        },
      });

      return {
        ...session,
        user:
          response.length > 0
            ? {
                id: response[0].id.toString(),
                provider: response[0].provider,
                name: response[0].name,
                phone: response[0].phone,
              }
            : {
                id: null,
                provider: user.id,
              },
      };
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
