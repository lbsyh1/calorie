import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "../components/Box";
import styled from "styled-components";
export default function () {
  const Wrapper = styled.div`
    border: 1px solid black;
    background: #ffe9cf;
  `;
  const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `;

  const Section = styled.div`
    width: 100%;
    height: 100%;
  `;
  return (
    <div>
      <p>MyCalorieList</p>
      <Wrapper>
        <Box date="2022-06-16" totalCalories="1500kcal" numberOfIntakes="3" />
      </Wrapper>
      <Wrapper>
        <Box date="2022-06-17" totalCalories="2000kcal" numberOfIntakes="4" />
      </Wrapper>
      <Wrapper>
        <Box date="2022-06-18" totalCalories="1800kcal" numberOfIntakes="4" />
      </Wrapper>
      <Wrapper>
        <Box date="2022-06-19" totalCalories="1700kcal" numberOfIntakes="3" />
      </Wrapper>
      <Section>
        <Icon>
          <ControlPointIcon style={{ width: "50px", height: "50px" }} />
        </Icon>
      </Section>
    </div>
  );
}
