import React, { useState, useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "../components/Box";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCalories } from "@/service/CalorieService";

const Wrapper = styled.section``;
const BoxWrapper = styled.div``;
const Icon = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export default function () {
  const [calories, setCalories] = useState([]);

  const initCalories = async () => {
    const data = await getCalories();
    setCalories(data);
  };

  useEffect(() => {
    initCalories();
  }, []);

  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/my-calories/edit");
  };

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
