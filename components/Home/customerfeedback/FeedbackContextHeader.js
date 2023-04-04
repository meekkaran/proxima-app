import React, { useState } from "react";
import Link from "next/link";
// The import order DOES MATTER here. If you change it, you'll get an error!

function FeedbackContextHeader() {
  // Setting state for the values that we want to use
  // const [year, setYear] = useState(0);
  // const [month, setMonth] = useState();
  // const [day, setDay] = useState(0);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = formData;

  //Handling change in form data
  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const fetchsetDateData = () => {};

  return (
    <div className='flex flex-row items-center rounded-md shadow-md mx-auto bg-gray-100 dark:bg-gray-800 outline outline-1 outline-gray-300 dark:outline-gray-300/80 p-4'>
      {/* <div className='flex flex-row items-center text-gray-500 cursor-pointer  px-2'> */}
      <Link href='/customerfeedback/generatesurvey'>
        <a className='lg:inline-flex px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 hover:bg-blue-900 dark:hover:bg-white/80 hover:shadow-blue-800/80 hover:text-white hover:shadow-md dark:hover:shadow-gray-100/80 transition-color duration-200 cursor-pointer font-bold'>
          Generate
        </a>
      </Link>
      <Link href='/customerfeedback/customerfeedback'>
        <a className='lg:inline-flex px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 hover:bg-blue-900 dark:hover:bg-white/80 hover:shadow-blue-800/80 dark:hover:shadow-gray-100/80 hover:text-white hover:shadow-md transition-color duration-200 cursor-pointer font-bold'>
          Feedback
        </a>
      </Link>
      {/* </div> */}
      {/* <div className='flex flex-row space-x-1 shadow-md p-2'>
        <input
          type='integer'
          name='email'
          id='email'
          placeholder='01'
          className='py-2 p-1 border bg-gray-100 border-gray-400 rounded-sm mt-1 w-[60px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
          value={email}
          onChange={onChange}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='12'
          className='py-2 p-1 border bg-gray-100 border-gray-400 rounded-sm mt-1 w-[60px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
          value={email}
          onChange={onChange}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='2022'
          className='py-2 p-1 border bg-gray-100 border-gray-400 rounded-sm mt-1 w-[60px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
          value={email}
          onChange={onChange}
        />

        <div className='mb-6 pt-1'>
          <button
            type='button'
            className='w-full px-3 py-1 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none'
            onClick={fetchsetDateData}>
            Adjust Dates
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default FeedbackContextHeader;
