import FloatBtnGroup from "@component/button/FloatBtnGroup";
import { Footer } from "@component/organism/Footer";
import MobileTopBar from "@component/organism/MobilTopBar";
import { MobileFooter } from "@component/organism/MobileFooter";
import TopBar from "@component/organism/TopBar";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useMediaQuery } from "react-responsive";
import { useIsMobile } from "../../hooks/useIsMobile";
import useLogin from "../../utils/login/useLogin";
import { isMobileSize } from "../../utils/responsive/isMobile";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  // const { login, isLogin, logOut, userProfile } = useLogin();

  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });

  const mobile = useMediaQuery({ query: `(max-width: ${isMobileSize}px)` });

  const isMobile = useIsMobile();

  //   const isManager = userProfile?.role === "MANAGER";

  //   const RenderedChildren = match({
  //     isLogin: isLogin,
  //     isManager: isManager,
  //   })
  //     .with({ isManager: true }, () => {
  //       return <>{children}</>;
  //     })
  //     .with({ isManager: false, isLogin: true }, () => {
  //       return (
  //         <div className="flex items-center justify-center w-full h-full">
  //           로그인하였지만 권한없음, 권한이 필요하면 OOO에게 연락바람
  //         </div>
  //       );
  //     })
  //     .otherwise(() => {
  //       return (
  //         <div className="flex items-center justify-center w-full h-full">
  //           <Button
  //             onClick={() => {
  //               login();
  //             }}
  //             variant="bordered"
  //           >
  //             로그인
  //           </Button>
  //         </div>
  //       );
  //     });

  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={<div></div>}>
        <div
          className="max-w-[100vw] min-h-[100vh]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: isMobile ? "100%" : "1200px",
              minWidth: isMobile ? "100%" : "1200px",
            }}
          >
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

              // <>
              //   <TopButton />
              //   <TopBar />
              // </>
            )}

            {/* <main className="h-[calc(100vh-70px)]">{RenderedChildren}</main> */}
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
  const { logOut } = useLogin();
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
