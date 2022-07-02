import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const Chart = () => {
  const Container = styled.div`
    width: 90vw;
    max-width: 900px;
  `;

  return <Container>{/* <Bar type="bar" data={data} /> */}</Container>;
};

export default Chart;
