import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  border: 1px solid black;
  background: #ffe9cf;
`;

const Box = ({
  description,
  calories,
  date,
  totalCalories,
  numberOfIntakes,
}) => {
  return (
    <Wrapper>
      <h1>{description}</h1>
      <p>{calories}</p>
      {date && <p>날짜{date}</p>}
      {totalCalories && <p>총 칼로리{totalCalories}</p>}
      {numberOfIntakes && <p>음식섭취횟수{numberOfIntakes}</p>}
    </Wrapper>
  );
};

export default Box;
