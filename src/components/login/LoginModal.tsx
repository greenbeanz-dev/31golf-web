import CommonModal from "@component/molecule/modal/CommonModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useLogin from "../../utils/login/useLogin";
import Login from "./LoginComponent";
import getShortPhoneNumber from "../../utils/format/getShortPhoneNumber";

const LoginModal = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const { logOut, isLogin, userProfile } = useLogin();
  return (
    <CommonModal
      header={
        isLogin && userProfile.name
          ? `${userProfile.name}${getShortPhoneNumber(userProfile.phone)}님 환영합니다.`
          : "로그인"
      }
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
      <Login useHelperMsg={true} banner={false} />
    </CommonModal>
  );
};

export default LoginModal;
