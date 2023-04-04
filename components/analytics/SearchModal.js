/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
function SearchModal() {
  const [filter, setFilter] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios({
    //   method: "post",
    //   url: "http://127.0.0.1:8000/api/onboarding/waitlist",
    //   data: formField,
    // })
    //   .then((response) => {
    //     //console.log(response.data.token);
    //     if (response.data.token) {
    //       console.log(response.data);
    //     }

    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //     } else if (error.request) {
    //     }
    //   });
  };

  return (
    <aside className='flex items-center border-2 rounded-full py-1 shadow-md p-4 my-4'>
      <form onSubmit={handleSubmit}>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='flex-grow pl-5 bg-white/40 backdrop-blur-md outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Search...'
        />
        <button type='submit'>
          <MagnifyingGlassIcon className='md:inline-flex h-8 bg-blue-900 text-white dark:text-gray-100 rounded-full p-2 cursor-pointer md: mx-2' />
        </button>
      </form>
    </aside>
  );
}

export default SearchModal;
