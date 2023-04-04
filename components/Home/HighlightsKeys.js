/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";

function HighlightsKeys() {
  const highlights = [
    {
      id: 1,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 2,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 3,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 4,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 5,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 6,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
    {
      id: 7,
      title: "Alllocated assets",
      description: "Amount",
      info: "$10M",
    },
  ];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
      {highlights.map((highlight) => (
        <div
          key={highlights.id}
          className='shadow-md bg-white rounded-lg overflow-hidden outline outline-1 outline-gray-300 transition-color cursor-pointer scale-95 hover:scale-100 transform transition duration-300 ease-out hover:outline-blue-900/80 dark:hover:outline-gray-100 hover:shadow-gray-300 dark:hover:shadow-gray-100'>
          <div className='w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div className='px-3 py-5'>
              <div className='flex flex-row items-center justify-between'>
                <div>
                  <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                    {highlight.title}
                  </h5>
                </div>
                <div className='sm:object-cover object-center relative h-[40px] w-[40px]'>
                  <Image
                    src={coverpage}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl shadow-lg'
                  />
                </div>
              </div>
              <div className='flex items-center mt-2.5 mb-5'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>First star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Second star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Third star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Fourth star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-yellow-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Fifth star</title>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-white/80 dark:text-black/80 ml-3'>
                  5.0
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-blue-900 dark:text-black/80 text-xl font-bold rounded-lg text-center dark:bg-white/80 px-2 dark:focus:ring-blue-800'>
                  {highlight.description}
                </div>
                <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                  {highlight.info}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HighlightsKeys;
