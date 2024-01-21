import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import 'react-calendar/dist/Calendar.css';

const StyledCalendar = styled(Calendar)`
  border-radius: 10px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  top: 50%;
  left: 50%;
  transform: translate(650%, 2100%);
`;

const Buttons = ({ onChange = () => {}, value }) => {
  const [disableButton, setDisabledButton] = useState(true);
  const navigate = useNavigate();
  const changeDate = e => {
    const selectedDates = Array.isArray(e) ? e : [e];
    const startDate = moment(selectedDates[0]).format('YYYY/MM/DD');
    const endDate = moment(selectedDates[selectedDates.length - 1]).format(
      'YYYY/MM/DD',
    );
    setDisabledButton(!startDate || !endDate);
  };
  const handleNextClick = () => {
    navigate('./TimeSelectionPage');
  };

  return (
    <div>
      <StyledCalendar
        onChange={changeDate}
        value={value}
        showNeighboringMonth={false}
      />
      <StyledButton disabled={disableButton} onClick={handleNextClick}>
        다음
      </StyledButton>
    </div>
  );
};

export default Buttons;
