import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderWithArrow from '../../components/common/HeaderWithArrow';

const DayPages = () => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate('/CalendarsbuttonPage');
  };

  return (
    <Container>
      <HeaderWithArrow />
      <ContentContainer>
        <Arrow onClick={handleArrowClick}>▼</Arrow>
        <div style={{ marginLeft: '5px' }}>
          <div>날짜 선택</div>
        </div>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div``;
const Arrow = styled.div`
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: #92c2b1;
`;
export default DayPages;
