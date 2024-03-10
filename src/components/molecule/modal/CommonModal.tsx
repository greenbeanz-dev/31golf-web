import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { theme } from "../../../../pages/_app";

interface CommonModalProps {
  header?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  confirmAction?: {
    action: () => void;
    isLoading?: boolean;
    label?: string;
    color?: ButtonProps["color"];
  };
  closeAction?: {
    action: () => void;
    isLoading?: boolean;
    label?: string;
    color?: ButtonProps["color"];
  };
  onClose: () => void;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
}

const CommonModal = ({
  header,
  children,
  confirmAction,
  closeAction,
  isOpen,
  onClose,
  size = "xl",
}: CommonModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody className="min-h-unit-5">{children}</ModalBody>
        <ModalFooter>
          {confirmAction && (
            <Button
              variant="solid"
              style={{
                backgroundColor: theme.colors.primary,
              }}
              color={confirmAction.color || "primary"}
              isLoading={confirmAction?.isLoading}
              onClick={confirmAction.action}
            >
              {confirmAction?.label || "Confirm"}
            </Button>
          )}
          {closeAction && (
            <Button
              isLoading={closeAction?.isLoading}
              onClick={closeAction.action}
              color={closeAction.color || "default"}
            >
              {closeAction?.label || "Close"}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommonModal;
