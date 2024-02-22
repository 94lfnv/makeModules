import React from "react";
import useModal from "../../hooks/useModal";

// 모달을 실질적으로 사용하는 곳

const MyComponent: React.FC = () => {
  const { openModal, Modal } = useModal();

  return (
    <div>
      <button onClick={() => openModal(<div>Modal Content</div>)}>
        Open Modal
      </button>
      <Modal />
    </div>
  );
};

export default MyComponent;
