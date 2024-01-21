import React from 'react';
import Header from '../../components/common/HeaderWithArrow';
import * as style from './styles';

const StatusPage = () => {
  return (
    <style.TableContainer>
      <Header />
      <style.TableTitle>내 예약 현황</style.TableTitle>
    </style.TableContainer>
  );
};

export default StatusPage;
