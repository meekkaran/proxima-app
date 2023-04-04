import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      align: "center",
      // text: "Proxima Line Chart",
      font: { weight: "bold", size: "18px" },
      // color: "#1E3A8A",
      padding: 10,
    },
  },
};

const labels = [
  "00.00",
  "01.00",
  "02.00",
  "03.00",
  "04.00",
  "05.00",
  "06.00",
  "07.00",
  "08.00",
  "09.00",
  "10.00",
  "11.00",
  "13.00",
  "14.00",
  "15.00",
  "16.00",
  "17.00",
  "18.00",
  "19.00",
  "20.00",
  "21.00",
  "22.00",
  "23.00",
  "24.00",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      fillColor: "rgba(195,40,96,0.1)",
      strokeColor: "rgba(195,40,96,0.1)",
      pointColor: "rgba(195,40,96,0.1)",
      pointStrokeColor: "#202b33",
      data: [
        100, 200, 300, 100, 500, 400, 890, 100, 200, 300, 100, 500, 400, 890,
        100, 200, 300, 100, 500, 400, 890, 67, 56, 56,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      hoverBackgroundColor: "rgba(255, 99, 132, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Dataset 2",
      data: [
        360, 200, 300, 400, 270, 677, 897, 150, 250, 350, 150, 550, 450, 89,
        360, 200, 300, 400, 270, 677, 897, 100, 200, 300,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
  ],
};

export function CumulativeHourlyPrediction() {
  return (
    <div className='w-full flex flex-col justify-center py-2'>
      <h2 className='text-xl text-center text-blue-900 dark:text-gray-100/80 font-bold'>
        Proxima Line Chart
      </h2>
      <Line
        options={options}
        data={data}
        className='px-1 sm:px-1 md:px-2 lg:px-10 xl:px-10'
      />
    </div>
  );
}
