import React from "react";

const Box = (props) => {
  return (
    <div>
      <h1>{props.description}</h1>
      <p>{props.calories}</p>
    </div>
  );
};

export default Box;
