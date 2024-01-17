import React from 'react';
import styled from 'styled-components';

const ManageButton = ({ text, onClick, img }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 327px;
  height: 80px;
  background-color: #92c2b1;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

const Text = styled.div`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: #000000;
`;

export default ManageButton;
