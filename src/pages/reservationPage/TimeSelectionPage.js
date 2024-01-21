import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Timing from '../../components/common/calandar/Timing';
import HeaderWithArrow from '../../components/common/HeaderWithArrow';

const TimeSelectionPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  const handleTimeSelect = time => {
    setSelectedTime(time);
    navigate('/ReservationPage');
  };

  return (
    <div>
      <HeaderWithArrow />
      <Timing onSelect={handleTimeSelect} />
    </div>
  );
};

export default TimeSelectionPage;
