import FloatBtnGroup from "@component/button/FloatBtnGroup";
import { Footer } from "@component/organism/Footer";
import MobileTopBar from "@component/organism/MobilTopBar";
import { MobileFooter } from "@component/organism/MobileFooter";
import TopBar from "@component/organism/TopBar";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useIsMobile } from "../../hooks/useIsMobile";
import useLogin from "../../utils/login/useLogin";
import getShortPhoneNumber from "../../utils/format/getShortPhoneNumber";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={<div></div>}>
        <div className="max-w-[100vw] min-h-[100vh] flex items-center flex-col">
          <div className="w-full max-w-[1200px]">
            {isMobile ? (
              <>
                <LogoutComponent />
                <MobileTopBar />
              </>
            ) : (
              <>
                <div className="flex h-8 justify-start" />
                <LogoutComponent />
                <TopBar />
              </>
            )}
            <main
              className="h-full"
              style={{
                paddingLeft: isMobile ? "3%" : "0%",
                paddingRight: isMobile ? "3%" : "0%",
              }}
            >
              {children}
            </main>
            <div style={{ minHeight: 72 }} />
            {isMobile ? <MobileFooter /> : <Footer />}
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <FloatBtnGroup />
          </Suspense>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

const LogoutComponent = () => {
  const isMobile = useIsMobile();

  const { isLogin, logOut, userProfile } = useLogin();

  if (!isLogin || !userProfile.id || isMobile) {
    return null;
  }

  return (
    <div
      className="flex justify-end"
      onClick={() => {
        logOut();
      }}
    >
      <div className="text-xl text-blue-700">
        {isLogin && userProfile.name && (
          <div>
            {userProfile.name}
            {getShortPhoneNumber(userProfile.phone)}님 환영합니다
          </div>
        )}
      </div>
      <div className="pl-10" />
      <div className="text-xl text-[#444] font-bold cursor-pointer">
        로그아웃
      </div>
    </div>
  );
};
export default Layout;
