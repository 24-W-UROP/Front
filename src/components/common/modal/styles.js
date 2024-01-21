import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 101;
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 101;
`;

export const ModalContent = styled.div`
  background: white;
  border: 2px solid #92c2b1;
  padding: 35px 35px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
  z-index: 110;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 6px;
  font-size: 15px;
  font-weight: 600;
  background: none;
  border: none;
  color: black;
  border: none;
  cursor: pointer;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
