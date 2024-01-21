import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ClassroomSelector from '../../components/ClassroomSelector';
import FloorSelector from '../../components/FloorSelector';
import HeaderWithArrow from '../../components/common/HeaderWithArrow';

const SelectorPages = () => {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const navigate = useNavigate();
  const classroomsData = {
    '1층': ['강의실 101호', '강의실 102호', '강의실 103호'],
    '2층': ['강의실 201호', '강의실 202호', '강의실 203호'],
    '3층': ['강의실 301호', '강의실 302호', '강의실 303호'],
    '4층': ['강의실 401호', '강의실 402호', '강의실 403호'],
  };

  const handleFloorSelect = selected => {
    setSelectedFloor(selected);
  };
  return (
    <PageContainer>
      <HeaderWithArrow />
      <ContentContainer>
        <FloorSelector onSelect={handleFloorSelect} />
        <ClassroomSelector
          selectedFloor={selectedFloor}
          classroomsData={classroomsData}
          onNavigate={navigate}
          onSelect={selected => {
            setSelectedClassroom(selected);
          }}
        />
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  /* 스타일링이 필요한 경우 추가 */
`;
const ContentContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export default SelectorPages;
