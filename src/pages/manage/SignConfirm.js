import styled from 'styled-components';
import Header from '../../components/common/HeaderWithArrow';
import ConfirmButton from '../../components/ConfirmButton';

const SignConfirmPage = () => {
  return (
    <Container>
      <Header />
      <ButtonArea>
        <ConfirmButton text="승인" />
        <ConfirmButton text="승인거절" />
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 2px);
  display: flex;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 36px;
  margin-bottom: 36px;
`;

const ContentsArea = styled.div`
  padding: 160px 24px;
  flex: 1;
`;

export default SignConfirmPage;
