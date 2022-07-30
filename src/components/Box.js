import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  border: 1px solid black;
  background: #ffe9cf;
`;
const Box = (props) => {
  return (
    <Wrapper>
      <h1>{props.description}</h1>
      <p>{props.calories}</p>
      <p>날짜{props.date}</p>
      <p>총 칼로리{props.totalCalories}</p>
      <p>음식섭취횟수{props.numberOfIntakes}</p>
    </Wrapper>
  );
};

export default Box;
