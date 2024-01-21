import React from 'react';
import Button from '../button/button';
import * as style from './styles';

const CancelModal = ({ isOpen, handleConfirm, closeModal }) => {
  return (
    isOpen && (
      <style.ModalWrapper>
        <style.ModalContainer onClick={closeModal} />
        <style.ModalContent>
          <style.ModalCloseButton onClick={closeModal}>
            X
          </style.ModalCloseButton>
          <p>강의실 예약을 취소하시겠습니까?</p>
          <style.ButtonContainer>
            <div>
              <Button
                size="small"
                num="one"
                name="확인"
                onClick={handleConfirm}
              />
              <Button size="small" num="two" name="취소" onClick={closeModal} />
            </div>
          </style.ButtonContainer>
        </style.ModalContent>
      </style.ModalWrapper>
    )
  );
};

export default CancelModal;
