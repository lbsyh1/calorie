import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const Chart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        type: "bar",
        backgroundColor: "rgb(255, 99, 132)",
        label: "Calories",
        borderWidth: 2,
        data: [1800, 2000, 2000, 1900, 2000],
      },
    ],
  };
  return (
    <Container>
      <Bar type="bar" data={data} />
    </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;
export default Chart;
