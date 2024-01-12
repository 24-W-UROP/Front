import styled from 'styled-components';
import BackgroundPic from '../assets/background.svg';
import Lock from '../assets/lock.svg';

const OnboardingPage = () => {
  return (
    <Container>
      <Pic />
    </Container>
  );
};

const Pic = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${BackgroundPic});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 11.68px;
`;

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default OnboardingPage;
