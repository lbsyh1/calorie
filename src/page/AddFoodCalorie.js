import React from "react";
import SearchBarOfSearch from "../components/SearchBar";
import styled from "styled-components";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FoodRecord from "../components/FoodRecord";

export default function () {
  const Wrapper = styled.div`
    border: 1px solid black;
    background: #ffe9cf;
  `;
  const Section = styled.div`
    width: 80%;
    height: 80%;
  `;
  const DisplayFlex = styled.div`
    display: flex;
  `;

  return (
    <div>
      <p>AddFoodCalorie</p>
      <p>
        음식먹은 날짜 : <input type="date"></input>
      </p>

      <DisplayFlex>
        <Section>
          <SearchBarOfSearch />
        </Section>
        <ControlPointIcon />
      </DisplayFlex>

      <Wrapper>
        <FoodRecord foodName="피자" amount="1/4판" calories="250kcal" />
      </Wrapper>
      <Wrapper>
        <FoodRecord foodName="자장면" amount="1인분" calories="200kcal" />
      </Wrapper>
      <Wrapper>
        <FoodRecord foodName="케이크" amount="1/4개" calories="150kcal" />
      </Wrapper>
    </div>
  );
}
