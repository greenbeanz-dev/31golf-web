import CommonModal from "./CommonModal";

export const ConfirmModal = ({
  isOpen,
  onOpen,
  onConfirmClose,
  onClose,
  message,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onConfirmClose: () => void;
  onClose: () => void;
  message: string;
}) => {
  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      confirmAction={{
        action: async () => {
          onConfirmClose();
          onClose();
        },
        label: "확인",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </CommonModal>
  );
};
