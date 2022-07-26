import React from "react";
import styled from "styled-components";
import Box from "../components/Box";

const MainPage = () => {
  const Wrapper = styled.div`
    border: 1px solid black;
    background: #ffe9cf;
  `;

  return (
    <div>
      <p>Home</p>
      <div style={{ display: "flex" }}>
        <Wrapper>
          <Box description="현재 칼로리 섭취량" calories="40" />
        </Wrapper>
        <Wrapper>
          <Box description="허용된 칼로리 섭취 잔량" calories="360" />
        </Wrapper>
      </div>
      //주석
    </div>
  );
};

export default MainPage;
123;
