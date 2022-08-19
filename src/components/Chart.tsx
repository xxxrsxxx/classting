import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  data?: Array<number>;
}

const Chart = ({ data }: ChartProps) => {
  return (
    <Template>
      <Pie
        data={{
          labels: ["answer", "wrong"],
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </Template>
  );
};
const Template = styled.div`
  width: 360px;
  height: 360px;
`;

export default Chart;
