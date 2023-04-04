import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      align: "center",
      // text: "Proxima Bar Chart - Stacked",
      font: { weight: "bold", size: "18px" },
      // color: "#1E3A8A",
      padding: 10,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        100, 200, 300, 100, 500, 400, 890, 100, 200, 300, 100, 500, 400, 890,
        100, 200, 300, 100, 500, 400, 890, 67, 56, 56,
      ],
      backgroundColor: "rgba(255, 99, 132,0.7)",
      hoverBackgroundColor: "rgba(255, 99, 132, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [
        100, 200, 300, 100, 500, 400, 890, 100, 200, 300, 100, 500, 400, 890,
        100, 200, 300, 100, 500, 400, 890, 67, 56, 56,
      ],
      backgroundColor: "rgba(75, 192, 192,0.7)",
      hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [
        100, 200, 300, 100, 500, 400, 890, 100, 200, 300, 100, 500, 400, 890,
        100, 200, 300, 100, 500, 400, 890, 67, 56, 56,
      ],
      backgroundColor: "rgba(53, 162, 235,0.7)",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
      stack: "Stack 1",
    },
  ],
};

export function BarGrouped() {
  return (
    <div className='w-full flex flex-col justify-center py-2'>
      <h2 className='text-xl text-center text-blue-900 dark:text-gray-100/80 font-bold'>
        Proxima Bar Chart - Stacked
      </h2>
      <Bar
        options={options}
        data={data}
        className='px-1 sm:px-1 md:px-2 lg:px-10 xl:px-10 '
      />
    </div>
  );
}
