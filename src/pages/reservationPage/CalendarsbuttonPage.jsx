import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import CustomCalendar from '../../components/common/calandar/Calendar';
import Buttons from '../../components/common/calandar/Buttons';
import HeaderWithArrow from '../../components/common/HeaderWithArrow';

const Calendarsbutton = () => {
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();
  const changeDate = e => {
    const selectedDates = Array.isArray(e) ? e : [e];
    const startDate = moment(selectedDates[0]).format('YYYY/MM/DD');
    const endDate = moment(selectedDates[selectedDates.length - 1]).format(
      'YYYY/MM/DD',
    );
    setDisableButton(!startDate || !endDate);
  };
  const handleNextClick = () => {
    navigate('/TimeSelectionPage');
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <HeaderWithArrow />
      <CustomCalendar onChange={setSelectedDate} value={selectedDate} />
      <Buttons disabled={disableButton} onClick={handleNextClick}>
        다음
      </Buttons>
    </div>
  );
};
export default Calendarsbutton;
