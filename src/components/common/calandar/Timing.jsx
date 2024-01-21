import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Timing = ({ onSelect }) => {
  const [showTimes, setShowTimes] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const Times = ['9:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

  const handleArrowClick = () => {
    setShowTimes(!showTimes);
  };
  const handleTimeClick = time => {
    onSelect(time);
    setShowTimes(false);
    setSelectedTime(time);
  };

  return (
    <Container>
      <Arrow onClick={handleArrowClick}>▼</Arrow>
      <div style={{ marginLeft: '15px', position: 'relative', top: '-20px' }}>
        <div>시간 선택</div>
      </div>

      {showTimes && (
        <TimesContainer>
          {Times.map(time => {
            return (
              <TimeItem
                key={time}
                onClick={() => {
                  handleTimeClick(time);
                }}
              >
                {time}
              </TimeItem>
            );
          })}
        </TimesContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #92c2b1;
  border-radius: 10px;
  padding: 20px;
  width: 120px;
  height: 30px;
  cursor: pointer;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;
  position: relative;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const TimeItem = styled.div`
  cursor: pointer;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  width: 140px;
  height: 50px;
  position: relative;
  top: 7px;
  left: -18px;
`;
const TimesContainer = styled.div`
  cursor: pointer;
`;

export default Timing;
