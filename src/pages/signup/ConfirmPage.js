import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/common/HeaderWithArrow';
import Footer from '../../components/FooterBotton';
import Input from '../../components/Input';
import Img from '../../assets/Img.svg';

const ConfirmPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const onInputChange = e => {
    setText(e.target.value);
  };
  return (
    <Container>
      <Header />
      <ContentsArea>
        <Input
          title="메일"
          onChange={onInputChange}
          value={text}
          placeholder="메일주소를 입력하세요"
        />
        <Upload />
        <Text>
          국민대 학생인증을 위해 재적인증여부가 가능한 사진을 첨부해주세요
        </Text>
        <Text>
          *이름, 학번, 과, 재적상태 이외의 개인정보는 가린 사진을 첨부해주세요
        </Text>
      </ContentsArea>
      <Footer text="완료" />
    </Container>
  );
};

const Upload = styled.div`
  width: 220px;
  height: 220px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  margin-left: 40px;
  margin-bottom: 44px;
`;

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 209px;
  font-size: 11px;
  color: #808080;
  margin-left: 40px;
`;

const ContentsArea = styled.div`
  padding: 72px;
  flex: 1;
`;

export default ConfirmPage;
