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
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
`;

const Table = styled.table`
  width: 336px;
  margin-left: 8px;
  border-collapse: collapse;

  th,
  td {
    border: 2px solid #92c2b1;
    font-size: 12px;
    text-align: center;
    padding: 4px;
  }
`;

export { ButtonContainer, TableContainer, TableTitle, Table };
