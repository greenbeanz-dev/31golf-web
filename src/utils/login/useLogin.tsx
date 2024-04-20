import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";

export default function useLogin() {
  const { data: session, status } = useSession();

  const logOut = async () => {
    await axios.get("/api/auth/signout");
    await signOut({ redirect: true });
  };

  const login = async (provider, options) => {
    const result = await signIn(provider, options);
    if (result?.error) {
      // 로그인 실패 시 회원가입 페이지로 리다이렉트
      window.location.href = "/signup";
    }
    console.log({ result });
    return result;
  };

  return {
    login: login,
    logOut: logOut,
    userProfile: { ...session?.user } || {},
    isLogin: status === "authenticated",
  };
}
