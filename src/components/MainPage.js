import React from "react";
import Box from "./Box";
import Chart from "./Chart";

const MainPage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Box description="현재 칼로리 섭취량" calories="40" />
        <Box description="허용된 칼로리 섭취 잔량" calories="360" />
      </div>
      <Chart />
    </div>
  );
};

export default MainPage;
