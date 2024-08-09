import { Button, CircularProgress, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { theme } from "../../../pages/_app";
import usePopupList from "../../service/webSetting/usePopupList";
import useLogin from "../../utils/login/useLogin";

const Login = ({ useHelperMsg = false }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogin } = useLogin();

  const handlePassword = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "").replace("-", "");
    setPassword(numericValue);
  };

  const handleSubmit = async () => {
    if (id === "" || password === "") {
      return alert("정보를 입력해 주세요.");
    }

    await login("credentials", {
      name: id,
      phone: password,
      provider: "credentials",
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col min-w-[224px]">
      <div className="text-xl font-bold">
        {/* {isLogin && userProfile.name && (
          <div>
            {userProfile.name}
            {getShortPhoneNumber(userProfile.phone)}님 환영합니다.
          </div>
        )} */}
        <div className="flex flex-col gap-2">
          {!isLogin && (
            <>
              {useHelperMsg && (
                <div className="text-red-500 text-sm font-normal">
                  로그인이 필요합니다 🙂
                </div>
              )}
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
                inputMode="numeric"
                placeholder="휴대폰번호(-제외)"
                size={"sm"}
                value={password}
                onChange={handlePassword}
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
                className="flex justify-center items-center h-[56px] w-full rounded-[8px] bg-[#ffe500] cursor-pointer"
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
                className="flex justify-center items-center h-[56px] w-full rounded-[8px] bg-[#03C75A] cursor-pointer"
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
          <ErrorBoundary fallback={<></>}>
            <Suspense
              fallback={
                <div className="w-full flex items-center justify-center min-h-20">
                  <CircularProgress />
                </div>
              }
            >
              <BannerWhenUserLoginIn />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};
export default Login;

const BannerWhenUserLoginIn = () => {
  const { data } = usePopupList();
  const banner = data?.find((item) => item.type === "BANNER_LEFT");

  if (!banner || !banner.image) return null;

  return (
    <div className="mt-24">
      <Link href={banner?.url || ""}>
        <Image
          className="rounded"
          src={banner.image}
          alt="banner"
          width={240}
          height={360}
        />
      </Link>
    </div>
  );
};
