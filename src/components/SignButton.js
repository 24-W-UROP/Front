import React from 'react';
import styled from 'styled-components';

const SignButton = ({ text, onClick, img }) => {
  return (
    <ButtonWrapper>
      <Pic img={img} />
      <Text onClick={onClick}>{text}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 327px;
  height: 48px;
  border: 1px solid #888888;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Text = styled.div`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: #888888;
`;

const Pic = styled.div`
  width: 38px;
  height: 38px;
  background-image: url(${props => {
    return props.img;
  }});
  background-repeat: no-repeat;
  margin: 15px;
`;

export default SignButton;
