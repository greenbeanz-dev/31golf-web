import CommonModal from "@component/molecule/modal/CommonModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useLogin from "../../utils/login/useLogin";
import Login from "./LoginComponent";

const LoginModal = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const { logOut, isLogin } = useLogin();
  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      {...(isLogin && {
        confirmAction: {
          action: () => {
            logOut();
          },
          isLoading: false,
          label: "로그아웃",
        },
      })}
      closeAction={{
        action: () => {
          onClose();
        },
        isLoading: false,
        label: "닫기",
      }}
    >
      <Login useHelperMsg={true} />
    </CommonModal>
  );
};

export default LoginModal;
