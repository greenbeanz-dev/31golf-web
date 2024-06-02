import FloatBtnGroup from "@component/button/FloatBtnGroup";
import { Footer } from "@component/organism/Footer";
import MobileTopBar from "@component/organism/MobilTopBar";
import { MobileFooter } from "@component/organism/MobileFooter";
import TopBar from "@component/organism/TopBar";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useIsMobile } from "../../hooks/useIsMobile";
import useLogin from "../../utils/login/useLogin";
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
            <div className="flex h-8 justify-start" />
            {isMobile ? (
              <>
                <LogoutComponent />
                <MobileTopBar />
              </>
            ) : (
              <>
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
  const { logOut, isLogin } = useLogin();

  if (isLogin) {
    return null;
  }

  return (
    <div
      className="flex justify-end"
      onClick={() => {
        logOut();
      }}
    >
      <div className="text-[#444] cursor-pointer">로그아웃</div>
    </div>
  );
};
export default Layout;
