import React, { ReactNode } from "react";

// 모달 ui (전체적인 껍데기)

interface ModalUIProps {
  modalContent: ReactNode;
  closeModal: () => void;
}

const ModalUI: React.FC<ModalUIProps> = ({ modalContent, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {modalContent}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalUI;
