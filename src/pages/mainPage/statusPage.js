import React, { useState } from 'react';
import Header from '../../components/common/HeaderWithArrow';
import Button from '../../components/common/button/button';
import CancelModal from '../../components/common/modal/cancelModal';
import * as style from './styles';

const StatusPage = () => {
  const tableHeaders = ['날짜', '사용 시간', '강의실', '승인 여부', '취소'];
  const reservations = [
    {
      id: 1,
      date: '1월 4일',
      time: '18:00 - 20:00',
      classroom: '611',
      approval: '승인 완료',
    },
    {
      id: 2,
      date: '1월 9일',
      time: '14:00 - 16:00',
      classroom: '445',
      approval: '승인 대기',
    },
  ];

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  const handleCancelConfirm = () => {
    closeCancelModal();
  };

  return (
    <style.TableContainer>
      <Header />
      <style.TableTitle>내 예약 현황</style.TableTitle>
      <style.Table>
        <thead>
          <tr>
            {tableHeaders.map(header => {
              return <th key={header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {reservations.map(data => {
            return (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.classroom}</td>
                <td>{data.approval}</td>
                <td>
                  <Button
                    size="small"
                    num="one"
                    name="취소"
                    onClick={openCancelModal}
                    aria-label="취소"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </style.Table>

      <CancelModal
        isOpen={isCancelModalOpen}
        handleConfirm={handleCancelConfirm}
        closeModal={closeCancelModal}
      />
    </style.TableContainer>
  );
};

export default StatusPage;
