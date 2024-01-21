import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ClassroomSelector = ({ selectedFloor, classroomsData }) => {
  const classrooms = classroomsData[selectedFloor] || [];
  const [showClassrooms, setShowClassrooms] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const navigate = useNavigate();
  const classroomData = {
    '1층': ['강의실 101호', '강의실 102호', '강의실 103호'],
    '2층': ['강의실 201호', '강의실 202호', '강의실 203호'],
    '3층': ['강의실 301호', '강의실 302호', '강의실 303호'],
    '4층': ['강의실 401호', '강의실 402호', '강의실 403호'],
  };
  const handleArrowClick = () => {
    setShowClassrooms(!showClassrooms);
  };
  const handleClassroomClick = classroom => {
    setSelectedClassroom(classroom);
    setShowClassrooms(false);
    navigate('/DayPages');
  };

  return (
    <Container>
      <Arrow onClick={handleArrowClick}>▼</Arrow>
      <div style={{ marginLeft: '15px', position: 'relative', top: '-20px' }}>
        <div>강의실 선택</div>
      </div>

      {showClassrooms && (
        <ClassroomsContainer>
          {classroomData[selectedFloor].map(classroom => {
            return (
              <ClassroomItem
                key={classroom}
                onClick={() => {
                  handleClassroomClick(classroom);
                }}
              >
                {classroom}
              </ClassroomItem>
            );
          })}
        </ClassroomsContainer>
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
  cursor: 'pointer;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;
  position : relative;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const ClassroomItem = styled.div`
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
const ClassroomsContainer = styled.div`
  cursor: pointer;
`;

export default ClassroomSelector;
