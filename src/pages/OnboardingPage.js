import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundPic from '../assets/Logo.svg';
import Pencil from '../assets/Pencil.svg';
import Lock from '../assets/Lock.svg';
import SignButton from '../components/SignButton';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const onLockClickButton = () => {
    navigate('/login');
  };
  const onPencilClickButton = () => {
    navigate('/signup/1');
  };

  return (
    <Container>
      <Pic />
      <SignButton onClick={onLockClickButton} img={Lock} text="로그인" />
      <SignButton onClick={onPencilClickButton} img={Pencil} text="회원가입" />
    </Container>
  );
};

const Pic = styled.div`
  width: 200px;
  height: 300px;
  background-image: url(${BackgroundPic});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 88px;
  margin-top: 52px;
`;

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
`;

export default OnboardingPage;
