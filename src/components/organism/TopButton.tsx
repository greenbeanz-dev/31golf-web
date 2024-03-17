import { Button } from "@nextui-org/react";
import useLogin from "../../utils/login/useLogin";

export default function TopButton() {
  const { login, isLogin, logOut, userProfile } = useLogin();
  return (
    <div
      className="flex justify-end"
      style={{
        height: 32,
      }}
    >
      <Button
        style={{ height: "100%", color: "black", background: "transparent" }}
        onClick={() => {
          if (isLogin && userProfile.id) {
            logOut();
          }
        }}
      >
        {isLogin && userProfile.id ? "로그아웃" : "로그인"}
      </Button>
      <Button
        style={{ height: "100%", color: "black", background: "transparent" }}
      >
        예약조회
      </Button>
      <Button
        style={{ height: "100%", color: "black", background: "transparent" }}
      >
        회원가입
      </Button>
    </div>
  );
}
