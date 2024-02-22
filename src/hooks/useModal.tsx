import React, { useState, ReactNode } from "react";
import ModalUI from "../assets/commonStyle/modal/ModalUI";

// useModal - open / close 를 관장하는 함수

interface ModalHook {
  openModal: (content: ReactNode) => void;
  Modal: React.FC;
}

const useModal = (): ModalHook => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal: React.FC = () => {
    return isOpen ? (
      <ModalUI modalContent={modalContent} closeModal={closeModal} />
    ) : null;
  };

  return {
    openModal,
    Modal,
  };
};

export default useModal;
