import CommonModal from "@component/molecule/modal/CommonModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      closeAction={{
        action: () => {
          onClose();
        },
        isLoading: false,
        label: "취소",
      }}
    >
      <Login useHelperMsg={true} />
    </CommonModal>
  );
};

export default LoginModal;
