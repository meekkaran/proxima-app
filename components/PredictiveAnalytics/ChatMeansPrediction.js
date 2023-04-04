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
      label: "WhatsApp",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(255, 99, 132,0.6)",
      hoverBackgroundColor: "rgba(255, 99, 132, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Facebook",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(75, 192, 192,0.6)",
      hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Instagram",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(53, 162, 235,0.6)",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Instagram",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(53, 102, 215,0.6)",
      hoverBackgroundColor: "rgba(53, 102, 215, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Website",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(45, 115, 134,0.6)",
      hoverBackgroundColor: "rgba(45, 115, 134, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Application",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(53, 102, 105,0.6)",
      hoverBackgroundColor: "rgba(53, 102, 105, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
  ],
};

export function ChatMeansPrediction() {
  return (
    <div className='w-full flex flex-col justify-center py-3'>
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
