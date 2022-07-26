import React from "react";
import styled from "styled-components";
const FoodRecordEdit = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p> 음식이름{props.foodName}</p>
        <p> 분량{props.amount}</p>
        <p> 칼로리{props.calories}</p>
      </div>
    </div>
  );
};

export default FoodRecordEdit;
