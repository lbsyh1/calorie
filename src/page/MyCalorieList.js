import React, { useState, useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "../components/Box";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCalories, deleteCalorie } from "@/service/CalorieService";

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

  const onDeleteCalorie = async (id) => {
    await deleteCalorie(id);
    initCalories();
  };

  useEffect(() => {
    initCalories();
  }, []);
  // useEffect의 사용은 무한루프를 피하기 위해 필요하다
  // 그렇지 않으면 getCalorie호출->state변경으로 리렌더링->localhost8000에서 데이터를 get해서
  // 다시 getCalories호출->state변경으로 리렌더링 무한루프가 된다
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/my-calories/edit");
  };

  return (
    <Wrapper>
      <p>MyCalorieList</p>
      <BoxWrapper>
        {calories.map(
          ({ date, totalCalories, numberOfIntakes, foodName, id }, i) => (
            <Box
              key={`calorie-card-${i}`}
              date={date}
              totalCalories={totalCalories}
              numberOfIntakes={numberOfIntakes}
              foodName={foodName}
              onDeleteCalorie={() => onDeleteCalorie(id)}
            />
          )
        )}
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
