import ToolBar from "@component/organism/ToolBar";
import TopButton from "@component/organism/TopButton";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import useLogin from "../../utils/login/useLogin";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const { login, isLogin, logOut, userProfile } = useLogin();

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
      <div className="max-w-[100vw] min-h-[100vh]">
        <div style={{ height: 40 }} />
        <TopButton />
        <ToolBar />
        {/* <main className="h-[calc(100vh-70px)]">{RenderedChildren}</main> */}
        <main className="h-[calc(100vh-70px)]">{children}</main>
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
