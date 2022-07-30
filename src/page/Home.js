import React from "react";
import styled from "styled-components";
import Box from "../components/Box";

const MainPage = () => {
  return (
    <div>
      <p>Home</p>
      <div>
        <Box description="현재 칼로리 섭취량" calories="40" />
        <Box description="허용된 칼로리 섭취 잔량" calories="360" />
      </div>
      //주석
    </div>
  );
};

export default MainPage;
123;
