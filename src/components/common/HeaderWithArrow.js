import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import VectorArrow from '../../assets/VectorArrow.svg';

const HeaderWithArrow = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로가기 네비게이트 이용
  };
  return (
    <ButtonWrapper>
      <ArrowButton src={VectorArrow} onClick={handleBack} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #92c2b1;
  display: flex;
  align-items: center;
`;

const ArrowButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-left: 16px;
`;

export default HeaderWithArrow;
