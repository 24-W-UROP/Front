import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ManageButton from '../../components/ManageButton';

const MainPage = () => {
  const navigate = useNavigate();
  const onSignClickButton = () => {
    navigate('/manage/2');
  };
  const onRoomClickButton = () => {
    navigate('/manage/3');
  };
  return (
    <Container>
      <Header />
      <ManageButton onClick={onSignClickButton} text="회원가입 승인" />
      <ManageButton onClick={onRoomClickButton} text="강의실 대여 승인" />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #92c2b1;
  display: flex;
  align-items: center;
  margin-bottom: 150px;
`;

export default MainPage;
