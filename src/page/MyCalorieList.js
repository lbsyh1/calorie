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
  const calories = [
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
    { date: "2022-06-16", totalCalories: "1500kcal", numberOfIntakes: "3" },
  ];
  return (
    <Wrapper>
      <p>MyCalorieList</p>
      <BoxWrapper>
        {calories.map(({ date, totalCalories, numberOfIntakes }, i) => (
          <Box
            key={`calorie-card-${i}`}
            date={date}
            totalCalories={totalCalories}
            numberOfIntakes={numberOfIntakes}
          />
        ))}
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
