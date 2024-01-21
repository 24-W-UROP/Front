import React from 'react';
import * as style from './styles';

const Button = ({ size, num, name, onClick }) => {
  if (size === 'small') {
    return num === 'one' ? (
      <style.SmallButton1 onClick={onClick}>{name}</style.SmallButton1>
    ) : (
      <style.SmallButton2 onClick={onClick}>{name}</style.SmallButton2>
    );
  }
  return <style.BigButton onClick={onClick}>{name}</style.BigButton>;
};

export default Button;
