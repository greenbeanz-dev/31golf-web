import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
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
  providers: [
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     username: { label: "아이디", type: "text" },
    //     password: { label: "비밀번호", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (credentials !== undefined) {
    //       const response = await prisma.customer.findMany({
    //         where: {
    //           userid: credentials.username,
    //         },
    //       });
    //       if (response && response.length > 0) {
    //         return {
    //           user: {
    //             id: response[0].id.toString(),
    //             provider: response[0].provider,
    //             name: response[0].name,
    //             phone: response[0].phone,
    //           },
    //         };
    //       }
    //     }
    //     return null;
    //   },
    // }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.kakao_account.profile.nickname,
          email: profile.kakao_account.email,
          image: profile.kakao_account.profile.profile_image_url,
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
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return true;
    },
    // credentials일 경우 session을 타지 않음.
    async session({ session, user, token }) {
      // console.log({ session, user, token });

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
  },
  adapter: PrismaAdapter(prisma),
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
