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
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      align: "center",
      // text: "Escalated Conversations",
      font: { weight: "bold", size: "18px" },
      // color: "#1E3A8A",
      padding: 10,
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
      label: "Escalated Conversations 1",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      hoverBackgroundColor: "rgba(255, 99, 132, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Escalated Conversations 2",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
  ],
};

export function EscalatedConversationsPrediction() {
  return (
    <div className='w-full flex flex-col justify-center py-3'>
      <h2 className='text-xl text-center text-blue-900 dark:text-gray-100/80 font-bold'>
        Escalated Conversations
      </h2>
      <Bar
        options={options}
        data={data}
        className='px-1 sm:px-1 md:px-2 lg:px-10 xl:px-10 '
      />
    </div>
  );
}
