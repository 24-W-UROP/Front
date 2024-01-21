import React from 'react';
import Button from '../button/button';
import * as style from './styles';

const CompleteModal = ({ isOpen, handleConfirm, closeModal }) => {
  return (
    isOpen && (
      <style.ModalWrapper>
        <style.ModalContainer onClick={closeModal} />
        <style.ModalContent>
          <style.ModalCloseButton onClick={closeModal}>
            X
          </style.ModalCloseButton>
          <p>예약이 완료되었습니다.</p>
          <style.ButtonContainer>
            <div>
              <Button
                size="small"
                num="one"
                name="확인"
                onClick={handleConfirm}
              />
            </div>
          </style.ButtonContainer>
        </style.ModalContent>
      </style.ModalWrapper>
    )
  );
};

export default CompleteModal;
