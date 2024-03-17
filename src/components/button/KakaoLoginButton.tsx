import { Icon } from "@component/icon/Icon";
import styled from "styled-components";

export interface ButtonProps {
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  label?: string;
  variant?: "text" | "fill" | "outline" | "grey";
  onClick?: () => void;
}

interface KakaoLoginButtonProps extends ButtonProps {}

const KakaoLoginButton = ({
  disabled = false,
  fullWidth = false,
  onClick,
}: KakaoLoginButtonProps) => {
  return (
    <StyledButton disabled={disabled} fullWidth={fullWidth} onClick={onClick}>
      <Icon icon={"kakaoLogo"} size={20} priority={true} />
      <div className="pl-2" />
      <a
        style={{
          fontSize: 16,
          fontWeight: "normal",
          textAlign: "center",
          opacity: 0.85,
        }}
      >
        카카오 로그인
      </a>
    </StyledButton>
  );
};

export default KakaoLoginButton;

const StyledButton = styled.button<{
  fullWidth: ButtonProps["fullWidth"];
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 3rem;
  min-width: 4rem;
  border-radius: 8px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  color: #000000;
  background-color: #ffe500;
`;
