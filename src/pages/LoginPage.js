import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/FooterBotton';
import Header from '../components/common/HeaderWithArrow';
import Input from '../components/Input';

const LoginPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const onInputChange = e => {
    setText(e.target.value);
  };
  // const onClickButton = () => {
  //   navigate('/mainPage', { state: { userName: text } });
  // };
  return (
    <Container>
      <Header />
      <ContentsArea>
        <Input
          title="학번"
          onChange={onInputChange}
          value={text}
          placeholder="학번을 입력하세요"
        />
        <Input
          title="학과"
          onChange={onInputChange}
          value={text}
          placeholder="학과를 입력하세요"
        />
      </ContentsArea>
      <Footer text="로그인 완료" />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsArea = styled.div`
  padding: 160px 24px;
  flex: 1;
`;

export default LoginPage;
