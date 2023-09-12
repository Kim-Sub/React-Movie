/*
사용방법

1.   import React, { useState } from "react";
2.   import Modal from '../components/Modal';
3.   메인 const 아래에 아래 코드 작성
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };
 
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

4.   <모달 클릭할 요소 onClick={handleOpenModal}> </모달 클릭할 요소>
     <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={<div>Modal content here</div>} />

*/
import React from "react";
import styled from "styled-components";


const Modal = ({ isOpen, onClose, content }) => {
  const handleOverlayClick = (event) => {
    // 이벤트 타깃이 모달 영역 내부가 아닌 경우에만 모달을 닫기
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <StyledModal onClick={handleOverlayClick} className="Modal">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="modal-content">{content}</div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .close-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    color: black;
  }
`;

export default Modal;
