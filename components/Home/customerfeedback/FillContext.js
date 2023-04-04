import React, { useState } from "react";

function FillContext() {
  const [formData, setFormData] = useState({
    topic: "",
    question: "",
  });

  const { topic, question } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='p-4 shadow-md outline outline-1 outline-gray-300 dark:outline-gray-300/80 rounded-md'>
      <h1 className='text-center text-lg text-gray-600 dark:text-white/80 font-bold py-2 pb-4'>
        Set Up Surver Context
      </h1>
      <div className='flex flex-col'>
        <div className='mb-6'>
          <label
            //for="email"
            className='block mb-2 text-sm text-gray-600 dark:text-white/70 font-medium'>
            Topic
          </label>
          <input
            type='text'
            id='topic'
            placeholder='Enter Topic'
            className='py-2 p-2 border bg-gray-100 dark:bg-zinc-800 border-gray-400 dark:border-gray-100 rounded-md font-medium w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
            value={topic}
            onChange={onChange}
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm text-gray-600 dark:text-white/80 font-medium'>
            Number of Questions
          </label>
          <input
            type='number'
            id='question'
            placeholder='0'
            className='py-2 p-2 border bg-gray-100 dark:bg-zinc-800 border-gray-400 dark:border-gray-100 rounded-md font-medium w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
            value={question}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='mb-6 flex flex-col justify-center space-x-2'>
        <label className='block mb-2 text-sm text-gray-600 dark:text-white/80 font-medium'>
          Survey Context
        </label>
        <textarea
          rows='10'
          cols='58'
          name='description'
          placeholder='Enter details here...'
          className='border text-black/80 dark:text-white/80 border-gray-600 dark:border-gray-100 font-medium rounded-md p-2 focus:'
        />
      </div>
    </div>
  );
}

export default FillContext;
