import React, { useRef } from "react";
import styled from "styled-components";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FoodRecord from "../components/FoodRecord";
import { createCalorie } from "@/service/CalorieService";
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
const TextBox = styled.section`
  position: relative;
  margin: 20px 0;

  .add-icon {
    position: absolute;
    right: 20px;
    width: 30px;
    height: 30px;
  }

  p + p {
    margin-top: 10px;
  }
`;
export default function () {
  const dateRef = useRef(null);
  const foodRef = useRef(null);
  const takeRef = useRef(null);
  const calorieRef = useRef(null);

  return (
    <div>
      <p>AddFoodCalorie</p>
      <TextBox>
        <ControlPointIcon
          className="add-icon"
          onClick={() => {
            if (
              !dateRef.current.value ||
              !foodRef.current.value ||
              !takeRef.current.value ||
              !calorieRef.current.value
            ) {
              alert("데이터를 입력해주세요");
              return;
            }

            createCalorie({
              date: dateRef.current.value,
              totalCalories: calorieRef.current.value,
              numberOfIntakes: takeRef.current.value,
              foodName: foodRef.current.value,
            });
          }}
        />

        <p>
          <label>식사 날짜: </label>
          <input id="date" type="date" ref={dateRef}></input>
        </p>

        <p>
          <label>음식 이름: </label>
          <input type="text" ref={foodRef}></input>
        </p>
        <p>
          <label>인분: </label>
          <input type="number" defaultValue={1} ref={takeRef}></input>
        </p>
        <p>
          <label>칼로리: </label>
          <input type="number" ref={calorieRef}></input> kcal
        </p>
      </TextBox>

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
