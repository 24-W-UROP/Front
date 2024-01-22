import React from 'react';
import * as style from './styles';

const Button = ({ use, size, num, name, onClick }) => {
  if (use === 'modal') {
    return num === 'one' ? (
      <style.ModalButton1 onClick={onClick}>{name}</style.ModalButton1>
    ) : (
      <style.ModalButton2 onClick={onClick}>{name}</style.ModalButton2>
    );
  }

  if (size === 'small') {
    return <style.SmallButton onClick={onClick}>{name}</style.SmallButton>;
  }
  return <style.BigButton onClick={onClick}>{name}</style.BigButton>;
};

export default Button;
