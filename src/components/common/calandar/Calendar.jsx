import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const StyledCalendar = styled(Calendar)`
  border-radius: 10px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CustomCalendar = ({ onChange = () => {}, value }) => {
  const [disableButton, setDisableButton] = useState(true);
  const changeDate = e => {
    const selectedDates = Array.isArray(e) ? e : [e];
    const startDate = moment(selectedDates[0]).format('YYYY/MM/DD');
    const endDate = moment(selectedDates[selectedDates.length - 1]).format(
      'YYYY/MM/DD',
    );
    setDisableButton(!startDate || !endDate);
    onChange(selectedDates);
  };

  return (
    <div>
      <StyledCalendar
        onChange={changeDate}
        value={value}
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default CustomCalendar;
