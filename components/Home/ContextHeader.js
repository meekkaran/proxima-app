import React, { useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Calendar from "./calendar";

function ContextHeader() {
  // Setting state for the values that we want to use
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = formData;

  //Handling change in form data
  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // handling change refactor for the form data
  const onChange = (e) => {
    if (e.target.name === "day") {
      setDay(e.target.value);
    } else if (e.target.name === "month") {
      setMonth(e.target.value);
    } else if (e.target.name === "year") {
      setYear(e.target.value);
    }
  };

  //* passed to redux
  // const fetchsetDateData = async (e) => {
  //   e.preventDefault();
  //   const data = { day, month, year };
  //   try {
  //     const response = await fetch("/api/adjust-dates", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
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

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div className='bg-white dark:bg-gray-800 flex flex-row rounded-lg shadow-lg outline outline-1 outline-gray-300 dark:outline-gray-300/80'>
      <div className='w-full'>
        <label className='flex text-blue-900 dark:text-white/80 items-center justify-start px-3 py-1 font-bold'>
          Search Filter
        </label>
        <div className='grid grid-cols-1 pb-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-2 items-center justify-evenly gap-2.5'>
          <select
            value={day}
            onChange={onChange}
            className='py-1 p-1 border bg-gray-100 dark:bg-zinc-800 border-gray-400 rounded-md h-30 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'>
            {days.map((day) => (
              <option id='day' value={day} key={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            value={month}
            onChange={onChange}
            className='py-1 p-1 border bg-gray-100 dark:bg-zinc-800 border-gray-400 rounded-md w-auto h-30 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'>
            {months.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={onChange}
            className='py-1 p-1 border bg-gray-100 dark:bg-zinc-800 border-gray-400 rounded-md w-auto h-30 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'>
            {years.map((year) => (
              <option className='' value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <button
            type='submit'
            className='px-3 py-1 items-center text-white dark:text-black/80 bg-blue-900 dark:bg-white/80 rounded-lg place-self-end w-[180px] right-0 outline-none focus:outline-none shadow-md focus:shadow-blue-300 dark:focus:shadow-gray-100 font-bold'
            // onClick={fetchsetDateData}
          >
            Adjust Dates
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContextHeader;
