import styled from 'styled-components';

const FooterButton = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 99px;
  background: #92c2b1;
  gap: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: #808080;
  padding-top: 24px;
`;

export default FooterButton;
