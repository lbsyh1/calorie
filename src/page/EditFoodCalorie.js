import React from "react";
import FoodRecordEdit from "../components/FoodRecordEdit";
import styled from "styled-components";
export default function () {
  const Wrapper = styled.div`
    border: 1px solid black;
    background: #ffe9cf;
  `;
  return (
    <div>
      <p>EditFoodCalorie</p>
      <p>음식먹은날짜: 2022/06/16</p>
      <Wrapper>
        <FoodRecordEdit foodName="피자" amount="1/4판" calories="250kcal" />
      </Wrapper>
      <Wrapper>
        <FoodRecordEdit foodName="자장면" amount="1인분" calories="200kcal" />
      </Wrapper>
      <Wrapper>
        <FoodRecordEdit foodName="케이크" amount="1/4개" calories="150kcal" />
      </Wrapper>
    </div>
  );
}
