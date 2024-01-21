import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Button from '../../components/common/button/button';
import { ButtonContainer } from './styles';

const MainPage = () => {
  const navigate = useNavigate();

  const statusHandler = () => {
    navigate('/statusPage');
  };

  const reservationHandler = () => {
    navigate('/reservationPage');
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

export default MainPage;
