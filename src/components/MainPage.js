import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Box from './Box';
import Chart from './Chart';
import SideBar from './SideBar';
import { keyframes } from 'styled-components';

let toggle = true;
const sideBar = () => {
  toggle = !toggle;
  if (toggle) {
    document.getElementById('sideBarId').style.display = 'block';
  } else {
    document.getElementById('sideBarId').style.display = 'none';
  }
};
const animation = keyframes`
 from {margin-left:-300px;}
 to{margin-left:0;}

`;

const SideBar = styled.div`
  animation: ${animation} 1s linear infinite;
`;

sideBar();
const MainPage = () => {
  return (
    <div>
      <DehazeIcon onClick={sideBar} />
      <SideBar id="sideBarId" />
      <div style={{ display: 'flex' }}>
        <Box description="현재 칼로리 섭취량" calories="40" />
        <Box description="허용된 칼로리 섭취 잔량" calories="360" />
      </div>
      <Chart />
    </div>
  );
};

export default MainPage;
