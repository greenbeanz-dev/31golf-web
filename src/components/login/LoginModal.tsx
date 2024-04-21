import CommonModal from "@component/molecule/modal/CommonModal";
import { useForm } from "react-hook-form";
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
  const {
    register,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Omit<any, "id">>({
    mode: "onSubmit",
    //   resolver: RequestInputModelResolver,
  });

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
      <Login />
    </CommonModal>
  );
};

export default LoginModal;
