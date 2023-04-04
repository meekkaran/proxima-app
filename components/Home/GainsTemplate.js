import React from "react";

function GainsTemplate() {
  return (
    <div className='py-2 shadow-md bg-white dark:bg-gray-800 rounded-md overflow-hidden outline outline-1 outline-gray-300 transition-color cursor-pointer scale-95 hover:scale-100 transform transition duration-300 ease-out hover:outline-blue-900 dark:hover:outline-gray-100 hover:shadow-gray-300 dark:hover:shadow-gray-100'>
      <div className='flex flex-row pl-4 justify-left space-x-4 items-center'>
        <h1 className='text-lg text-green-500 font-bold'>Time Warner</h1>

        <div className='bg-blue-200 px-1 rounded-md'>
          <h1 className='text-blue-600 dark:text-blue-900 font-bold'>
            Entertainment
          </h1>
        </div>
      </div>

      <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-col font-medium space-y-2'>
          <h3>Oppty name</h3>
          <p>Customer 360</p>
        </div>
        <div className='flex flex-col font-medium space-y-2'>
          <h3>Oppty name</h3>
          <p>Customer 360</p>
        </div>
        <div className='flex flex-col font-medium space-y-2'>
          <h3>Oppty name</h3>
          <p>Customer 360</p>
        </div>
      </div>
    </div>
  );
}

export default GainsTemplate;
