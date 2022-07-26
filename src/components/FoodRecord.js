import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styled from "styled-components";
const FoodRecord = (props) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p> 음식이름{props.foodName}</p>
        <p> 분량{props.amount}</p>
        <p> 칼로리{props.calories}</p>
      </div>
      <div>
        <Wrapper>
          <DriveFileRenameOutlineIcon />
          <HighlightOffIcon />
        </Wrapper>
      </div>
    </div>
  );
};

export default FoodRecord;
