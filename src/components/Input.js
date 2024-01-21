import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.div`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 600;
`;

const InputBox = styled.div`
  height: 42px;
  width: 290px;
  border: 1px solid #808080;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-bottom: 61px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: var(--font-size-sm);
  line-height: 14px;
  font-weight: var(--font-weight-medium);
  padding-left: 16px;
`;

const Input = ({ title, onChange, value, placeholder }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputBox>
        <StyledInput
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </InputBox>
    </Container>
  );
};

export default Input;
