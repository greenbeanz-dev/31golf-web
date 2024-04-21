import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { theme } from "../../../pages/_app";
import getShortPhoneNumber from "../../utils/format/getShortPhoneNumber";
import useLogin from "../../utils/login/useLogin";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogin, logOut, userProfile } = useLogin();
  const router = useRouter();

  const handleSubmit = async () => {
    if (id === "" || password === "") {
      return alert("정보를 입력해 주세요.");
    }

    const result = await login("credentials", {
      name: id,
      phone: password,
      provider: "credentials",
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex-1 flex-col">
      <div className="text-xl font-bold">
        <Button
          onClick={() => {
            logOut();
          }}
        >
          로그아웃
        </Button>
        {isLogin && userProfile.name && (
          <div>
            {userProfile.name}
            {getShortPhoneNumber(userProfile.phone)}님 환영합니다.
          </div>
        )}
        <div className="h-6" />
        <div className="flex flex-col gap-2">
          {!isLogin && (
            <>
              회원 로그인
              <Input
                classNames={{
                  mainWrapper: ["w-full"],
                  input: ["!ring-transparent", "bg-transparent"],
                }}
                placeholder="이름"
                size={"sm"}
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Input
                classNames={{
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                placeholder="휴대폰번호"
                size={"sm"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                className="flex justify-center items-center h-[48px] w-full rounded-[8px]"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleSubmit}
              >
                로그인
              </Button>
              <div
                className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#ffe500]"
                onClick={() => {
                  login("kakao", {});
                }}
              >
                <Image
                  src="/icons/client/kakao_logo.svg"
                  alt="naver"
                  width={24}
                  height={24}
                />
                <div className="pl-1.5" />
                <div className="text-[16px] font-medium text-black opacity-85 leading-none">
                  카카오 로그인
                </div>
              </div>
              <div
                className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#03C75A]"
                onClick={() => {
                  login("naver", {});
                }}
              >
                <Image
                  src="/icons/client/naver_logo.png"
                  alt="naver"
                  width={32}
                  height={32}
                />
                <div className="pl-1" />
                <div className="text-[16px] font-medium text-white leading-none">
                  네이버 로그인
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
