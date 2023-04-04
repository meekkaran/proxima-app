import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getDatasetAtEvent } from "react-chartjs-2";
import * as faker from "@faker-js/faker";
import { faBold } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      align: "center",
      // text: "Proxima Bar Chart Acquisitions by year",
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
      label: "Dataset 1",
      data: [
        1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      // borderWidth: "1",
      // borderColor: "#e2e8f0",
      hoverBackgroundColor: "rgba(255,99,132,1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
    {
      label: "Dataset 2",
      data: [
        3000, 5000, 7000, 1000, 3400, 6700, 2594, 4556, 3445, 1234, 4556, 1236,
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      // borderWidth: "1",
      // borderColor: "#e2e8f0",
      hoverBackgroundColor: "rgba(53, 162, 235, 1)",
      hoverBorderWidth: 1,
      hoverBorderColor: "gray",
    },
  ],
};

export function MonthlyForecasting() {
  // const chartRef = useRef();
  // const onClick = (event) => {
  //   console.log(getDatasetAtEvent(chartRef.current, event));
  // };
  // const [data, setData] = useState({});
  // const [labels, setLabels] = useState([]);
  return (
    <div className='w-full flex flex-col justify-center py-3'>
      <h2 className='text-xl text-center text-blue-900 dark:text-gray-100/80 font-bold'>
        Proxima Bar Chart Aquistitions by year
      </h2>
      <Bar
        options={options}
        data={data}
        // ref={chartRef}
        // onClick={onClick}
        className='px-1 sm:px-1 md:px-2 lg:px-10 xl:px-10 '
      />
    </div>
  );
}

export default MonthlyForecasting;
