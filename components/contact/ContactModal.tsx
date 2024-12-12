import { Modal, ModalBody, ModalContent } from "@nextui-org/react";

interface CompletedModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  body: JSX.Element;
}
export default function ContactModal({
  isOpen,
  onOpen,
  onOpenChange,
  body,
}: CompletedModalProps) {
  return (
    <Modal className="max-h-screen" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="h-5/6 overflow-y-auto">
        {(onClose) => <ModalBody className="pt-5">{body}</ModalBody>}
      </ModalContent>
    </Modal>
  );
}
