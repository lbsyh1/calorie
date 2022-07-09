import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import styled, { keyframes } from 'styled-components';
import Box from './Box';
import Chart from './Chart';
import SideBar from './SideBar';

// const sideBarIn = () => {
//   const animation = keyframes`
//  from {margin-left:-300px;}
//  to{margin-left:0;}
// `;

//   styled(SideBar)`
//     animation: ${animation} 1s linear ease-in-out;
//   `;
// };
// const sideBarOut = () => {
//   const animation = keyframes`

//  from{margin-left:0;}
//  t0 {margin-left:-300px;}

// `;

//   styled(SideBar)`
//     animation: ${animation} 1s linear infinite;
//   `;
// };

let toggle = true;
const sideBar = () => {
  // toggle = !toggle;
  // if (toggle) {
  //   sideBarIn();
  // } else {
  //   sideBarOut();
  // }
};

const MainPage = () => {
  return (
    <div>
      <DehazeIcon onClick={sideBar} />
      <SideBar />
      <div style={{ display: 'flex' }}>
        <Box description="현재 칼로리 섭취량" calories="40" />
        <Box description="허용된 칼로리 섭취 잔량" calories="360" />
      </div>
      //주석
      <Chart />
    </div>
  );
};

export default MainPage;
