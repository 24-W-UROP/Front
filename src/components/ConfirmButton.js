import React from 'react';
import styled from 'styled-components';

const ConfirmButton = ({ text, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <Text>{text}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 132px;
  height: 42px;
  background-color: #92c2b1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 20px;
  color: #000000;
`;

export default ConfirmButton;
