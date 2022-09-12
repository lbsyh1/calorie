import React from "react";
import styled from "styled-components";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid black;
  background: #ffe9cf;
  width: 350px;
  margin-bottom: 10px;
  padding: 10px;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
const Box = ({
  description,
  calories,
  date,
  totalCalories,
  numberOfIntakes,
  foodName,
  onDeleteCalorie,
}) => {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("../my-calories/edit");
  };

  return (
    <Wrapper>
      <h1>{description}</h1>
      <p>{calories}</p>
      {date && <p>날짜: {date}</p>}
      {totalCalories && <p>총 칼로리: {totalCalories}</p>}
      {numberOfIntakes && <p>음식섭취횟수: {numberOfIntakes}</p>}
      {foodName && <p>음식이름: {foodName}</p>}
      <IconWrapper>
        <DriveFileRenameOutlineIcon onClick={goToEdit} />
        <HighlightOffIcon onClick={onDeleteCalorie} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Box;
