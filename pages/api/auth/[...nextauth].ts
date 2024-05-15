import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import prisma from "../../../src/lib/prisma";
import { parsePhoneNumber } from "../../../src/utils/format/getFormatedPhoneNumber";

const TEMP_PHONE_NUMBER = "01063487983";

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
      async authorize(credentials): Promise<any> {
        console.log("credentials", credentials);
        if (credentials !== undefined) {
          const response = await prisma.customer.findMany({
            where: {
              name: credentials.name,
              phone: credentials.phone,
            },
          });
          console.log({ response });
          // 가장 큰 customer.id로 정렬
          if (response && response.length > 0) {
            const recentCustomer = response.sort(
              (a, b) => Number(b.id) - Number(a.id)
            );

            // 가장 최근 로그인 정보로 provider 업데이트
            const updateProvider = await prisma.customer.update({
              where: {
                id: recentCustomer[0].id,
              },
              data: {
                provider: "provider",
              },
            });
            return {
              id: recentCustomer[0].id ? Number(recentCustomer[0].id) : 0,
              name: recentCustomer[0].name || "",
              email: recentCustomer[0].email || "",
              phone: recentCustomer[0].phone || "",
              image: "",
            };
          } else {
            console.log(
              "일반 회원가입 유저가 아니기 때문에 회원가입 페이지로 이동합니다."
            );
            return true;
          }
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.kakao_account.name,
          email: profile.kakao_account.email,
          image: "",
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
          name: profile.response.name,
          email: profile.response.email,
          image: profile.response.profile_image,
          phone: profile.response.mobile,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      console.log("Signing in:", account);
      console.log("Signing profile:", profile);

      // 일반 로그인 클릭 시 회원가입이 안 된 유저일 경우 회원가입 페이지로 redirect
      if (
        !profile &&
        !account?.providerAccountId &&
        account?.type === "credentials"
      ) {
        return "/signup";
      }

      // 카카오 로그인
      if (account && account.provider === "kakao" && profile) {
        // note: KEY 교환 전 테스트시 주석 처리 해주세요.
        if (!(profile as any).kakao_account.phone_number) {
          return "/signup";
        }
        const name = (profile as any).kakao_account.name;
        const phone = parsePhoneNumber(
          (profile as any).kakao_account.phone_number
        );

        const response = await prisma.customer.findMany({
          where: {
            name: name,
            // note: KEY 교환 전 테스트시 주석 처리 해주세요.
            phone: phone,
          },
        });

        console.log("카카오 response", response);
        if (response.length === 0) {
          if (name && phone) {
            try {
              const newCustomer = await prisma.customer.create({
                data: {
                  name: name,
                  phone: phone,
                  provider: "sns",
                },
              });
              console.log({ newCustomer });
            } catch (error) {
              console.log(
                "카카오 회원가입 수행시 에러 발생하였습니다. 회원가입 페이지로 이동합니다."
              );
              return "/signup";
            }
          }
        }
      }

      // 네이버 로그인
      if (account && account.provider === "naver" && profile) {
        // note: KEY 교환 전 테스트시 주석 처리 해주세요.
        if (!(profile as any).response.mobile) {
          return "/signup";
        }

        const name = (profile as any).response.name;
        const phone = (profile as any).response.mobile.replaceAll("-", "");

        const response = await prisma.customer.findMany({
          where: {
            name: name,
            // note: KEY 교환 전 테스트시 주석 처리 해주세요.
            phone: phone,
          },
        });

        if (response.length === 0) {
          if (name && phone) {
            try {
              const newCustomer = await prisma.customer.create({
                data: {
                  name: name,
                  phone: phone,
                  provider: "sns",
                },
              });
              console.log({ newCustomer });
            } catch (error) {
              console.log(
                "naver 회원가입 수행시 에러 발생하였습니다. 회원가입 페이지로 이동합니다."
              );
              return "/signup";
            }
          }
        }
      }
      return true;
    },

    async session({ session, user, token }): Promise<any> {
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

          // 가장 최근 로그인 정보로 provider 업데이트
          const updateProvider = await prisma.customer.update({
            where: {
              id: recentCustomer[0].id,
            },
            data: {
              provider: "sns",
            },
          });
          // console.log({ updateProvider });

          return {
            ...session,
            user: {
              id: recentCustomer[0].id.toString(),
              name: recentCustomer[0].name,
              email: recentCustomer[0].email,
              phone: recentCustomer[0].phone,
              provider: recentCustomer[0].provider,
              image: "",
            },
          };
        } else {
          const newCustomer = await prisma.customer.create({
            data: {
              name: token.name,
              phone: token.phone as string,
              email: token.email,
              provider: "sns",
            },
          });
          return {
            ...session,
            user: {
              id: newCustomer.id.toString(),
              name: newCustomer.name,
              email: newCustomer.email,
              phone: newCustomer.phone,
              provider: newCustomer.provider,
              image: "",
            },
          };
        }
      }
      return {};
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log({ account, profile, token });
      if (account) {
        if (
          account.provider === "kakao" &&
          profile &&
          (profile as any).kakao_account &&
          (profile as any).kakao_account.phone_number
        ) {
          token.phone = parsePhoneNumber(
            (profile as any).kakao_account.phone_number
          );
        }

        if (
          account.provider === "naver" &&
          profile &&
          (profile as any).response &&
          (profile as any).response.mobile
        ) {
          token.phone = (profile as any).response.mobile.replaceAll("-", "");
        }
      } else {
        // 일반 회원가입
        if (token && token.sub && !isNaN(Number(token.sub))) {
          const response = await prisma.customer.findUnique({
            where: {
              id: Number(token.sub),
            },
          });
          if (response) {
            token.phone = response.phone;
          }
        } else {
          if (token && token.name && token.phone) {
            const response = await prisma.customer.findMany({
              where: {
                name: token.name,
                phone: token.phone,
              },
            });
            if (response) {
              token.phone = response[0].phone;
            }
          }
        }
      }
      return token;
    },
  },
  // adapter: PrismaAdapter(prisma),
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
