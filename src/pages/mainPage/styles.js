import styled from 'styled-components';

const ButtonContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  > img {
    width: 200px;
    height: 300px;
    margin-bottom: 88px;
  }
`;

const TableContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const TableTitle = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
`;

export { ButtonContainer, TableContainer, TableTitle };
