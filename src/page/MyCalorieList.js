import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "../components/Box";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section``;
const BoxWrapper = styled.div``;

export default function () {
  const Icon = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `;

  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/my-calories/edit");
  };

  return (
    <Wrapper>
      <p>MyCalorieList</p>
      <BoxWrapper>
        <Box date="2022-06-16" totalCalories="1500kcal" numberOfIntakes="3" />
        <Box date="2022-06-17" totalCalories="2000kcal" numberOfIntakes="4" />
        <Box date="2022-06-18" totalCalories="1800kcal" numberOfIntakes="4" />
        <Box date="2022-06-19" totalCalories="1700kcal" numberOfIntakes="3" />
      </BoxWrapper>

      <Icon>
        <ControlPointIcon
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={goToEdit}
        />
      </Icon>
    </Wrapper>
  );
}
