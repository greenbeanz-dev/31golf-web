import { Button } from "@nextui-org/react";

export default function TopButton() {
  return (
    <div
      className="flex justify-end"
      style={{
        height: 32,
      }}
    >
      <Button
        style={{ height: "100%", color: "black", background: "transparent" }}
      >
        로그인
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
