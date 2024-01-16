import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Button from '../../components/button/button';
import ButtonContainer from './styles';

const Main = () => {
  const navigate = useNavigate();

  const statusHandler = () => {
    // 예약 현황 페이지로 이동
  };

  const reservationHandler = () => {
    // 강의실 예약 페이지로 이동
  };

  return (
    <ButtonContainer>
      <img src={Logo} alt="로고 이미지" />
      <div>
        <Button size="big" name="예약 현황" onClick={statusHandler} />
        <Button size="big" name="강의실 예약" onClick={reservationHandler} />
      </div>
    </ButtonContainer>
  );
};

export default Main;
