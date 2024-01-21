import React, { useState } from 'react';
import styled from 'styled-components';

const submitPage = () => {
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [reason, setReason] = useState('');
  const handleReservation = () => {
    console.log('Reservation logic here');
  };

  return (
    <Container>
      <Section>
        <Title>사용인원</Title>
        <Separator />
        <Input
          type="text"
          palceholder="인원을 입력하세요"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
      </Section>
      <Section>
        <Title>사용이유</Title>
        <Separator />
        <Input
          type="text"
          placeholer="이유를 입력하세요"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </Section>
      <ButtonContainer>
        <ReservationButton onClick={handleReservation}>예약하기</ReservationButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  margin: 20px auto;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const ReservationButton = styled.button`
  padding: 10px 20px;
  background-color: #92c2b1;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default submitPage;