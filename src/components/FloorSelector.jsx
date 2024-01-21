import React, { useState } from 'react';
import styled from 'styled-components';

const FloorSelector = ({ onSelect }) => {
  const [showFloors, setShowFloors] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(null);

  const Floors = ['1층', '2층', '3층', '4층'];

  const handleArrowClick = () => {
    setShowFloors(!showFloors);
  };

  const handleFloorClick = floor => {
    onSelect(floor);
    setShowFloors(false);
    setSelectedFloor(floor);
  };

  return (
    <Container>
      <Arrow onClick={handleArrowClick}>▼</Arrow>
      <div style={{ marginLeft: '15px', position: 'relative', top: '-20px' }}>
        <div>{selectedFloor || '층 선택'}</div>
      </div>

      {showFloors && (
        <FloorsContainer>
          {Floors.map(floor => {
            return (
              <FloorItem
                key={floor}
                onClick={() => {
                  handleFloorClick(floor);
                }}
              >
                {floor}
              </FloorItem>
            );
          })}
        </FloorsContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  alignitems: center;
  border: 1px solid #ccc;
  padding: 20px;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: #92c2b1;
  cursor: pointer;
`;
const Arrow = styled.div`
  cursor: pointer;
`;
const FloorItem = styled.div`
  cursor: pointer;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  width: 140px;
  height: 50px;
  position: relative;
  top: 8px;
  left: -18px;
  display: selectedFloor === floor ? none : block;
`;
const FloorsContainer = styled.div`
  cursor: pointer;
`;

export default FloorSelector;
