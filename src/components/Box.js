import React from "react";

const Box = (props) => {
  return (
    <div>
      <h1>{props.description}</h1>
      <p>{props.calories}</p>
      <p>날짜{props.date}</p>
      <p>총 칼로리{props.totalCalories}</p>
      <p>음식섭취횟수{props.numberOfIntakes}</p>
    </div>
  );
};

export default Box;
