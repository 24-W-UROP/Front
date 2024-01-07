import styled from 'styled-components';

const InputBox = styled.div`
  height: 48px;
  border: 1px solid #bcc6e2;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 16px;
  border: none;
  outline: none;
  font-size: var(--font-size-sm);
  line-height: 14px;
  font-weight: var(--font-weight-medium);
  padding: 16px;
`;

const Input = ({ onChange, value, placeholder }) => {
  return (
    <InputBox>
      <StyledInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

export default Input;
