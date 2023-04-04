import React from "react";

function FilterContacts() {
  return (
    <div className='flex flex-row space-x-1'>
      <div className='p-1 text-gray-400 text-black/80 dark:text-white/80 font-bold hover:text-white hover:bg-blue-900 hover:shadow-blue-900/80 cursor-pointer dark:hover:bg-white/80 dark:hover:text-black/80 outline outline-1 outline-gray-800 dark:outline-gray-300/80 hover:shadow-md scale-95 dark:hover:shadow-gray-100 hover:scale-100 transform transition duration-300 ease-out m-1 my-2 rounded-md'>
        <h1 className='text-sm'>Finances</h1>
      </div>
    </div>
  );
}

export default FilterContacts;
