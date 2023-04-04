/* eslint-disable react/jsx-key */
import React from "react";
import ChatbotCard from "./ChatbotCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

function SummarizationContext() {
  const [currentPage, setCurrentPage] = useState(1);
  const [summarizationPerPage] = useState(6);
  const summarizations = [
    {
      id: 1,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 2,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 3,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 4,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 5,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 6,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 7,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 8,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 9,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 10,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 11,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 12,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 13,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
    {
      id: 14,
      phone_no: "0793681840",
      title: "Sales",
      date: "01/12/2022",
      user_summary: "This is the best thing that we can come up with",
      agents_summary: "This is the best thing that we can come up with",
      conversation_summary: "This is the best thing that we can come up with",
    },
  ];

  // Get current summarization
  const indexOfLastSummarization = currentPage * summarizationPerPage;
  const indexOfFirstSummarization =
    indexOfLastSummarization - summarizationPerPage;
  const currentSummarizations = summarizations.slice(
    indexOfFirstSummarization,
    indexOfLastSummarization
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {currentSummarizations.map((summarization) => (
          <div className='flex flex-col w-full shadow-md bg-white dark:bg-gray-300/50 rounded-md'>
            <div
              key={summarization.id}
              className='bg-white dark:bg-gray-800/40 rounded-md outline outline-1 outline-gray-300'>
              <div className='flex flex-row justify-between font-bold items-center py-1'>
                <div
                  className='rounded-md cursor-pointer flex flex-row'
                  onClick={() => {}}>
                  <ArrowLeftIcon className='md:inline-flex h-6 text-blue-900 dark:text-white/80 rounded-full  cursor-pointer' />
                  {summarization.phone_no}
                </div>
                <div
                  className='text-blue-900 dark:text-white/80  rounded-md cursor-pointer'
                  onClick={() => {}}>
                  {summarization.title}
                </div>
                <div className='text-sm flex flex-row'>
                  {summarization.date}
                  <EllipsisVerticalIcon className='md:inline-flex h-6 text-blue-900 dark:text-white/80 rounded-full cursor-pointer' />
                </div>
              </div>
              <div className=''>
                <ChatbotCard />
              </div>
            </div>
            <div className='py-2'>
              {/* Users summary */}
              <div className='py-1 px-2'>
                <h1 className='text-center text-md text-gray-600 dark:text-black/80 font-bold'>
                  Users summary
                </h1>
                <div className='p-2 bg-gray-200 dark:text-black/60 rounded-md shadow-md text-sm'>
                  <p>{summarization.user_summary} </p>
                </div>
              </div>
              {/* Agents summary */}
              <div className='py-1 px-2'>
                <h1 className='text-center text-md text-gray-600 dark:text-black/80 font-bold'>
                  Agents summary
                </h1>
                <div className='p-2 bg-gray-200 dark:text-black/60 rounded-md shadow-md text-sm'>
                  <p>{summarization.agents_summary} </p>
                </div>
              </div>
              {/* Conversation summary */}
              <div className='py-1 px-2'>
                <h1 className='text-center text-md text-gray-600 dark:text-black/80 font-bold'>
                  Conversation summary
                </h1>
                <div className='p-2 bg-gray-200 dark:text-black/60 rounded-md shadow-md text-sm'>
                  <p>{summarization.conversation_summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full pt-10 pb-5 flex justify-center'>
        <Pagination
          summarizationPerPage={summarizationPerPage}
          totalSummarization={summarizations.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

const Pagination = ({
  summarizationPerPage,
  totalSummarization,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalSummarization / summarizationPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav className='bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-md shadow-md outline outline-1 outline-gray-300'>
      <ul className='flex justify-center font-semibold'>
        {currentPage !== 1 && (
          <li className='cursor-pointer hover:text-blue-900 hover:text-white/80'>
            <ArrowLeftIcon
              onClick={() => paginate(currentPage - 1)}
              className='font-bold bg-gray-300 dark:bg-gray-100/10 hover:bg-blue-900/80 dark:hover:bg-gray-100 hover:text-white dark:hover:text-black h-6 rounded-l-md'
            />
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className='px-2 cursor-pointer hover:text-blue-900 dark:text-gray-100'>
            <span
              onClick={() => paginate(number)}
              className={
                number === currentPage
                  ? "px-2 text-white dark:text-black bg-blue-800 dark:bg-gray-100 rounded-md outline outline-1 outline-gray-300"
                  : ""
              }>
              {number}
            </span>
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li className='cursor-pointer hover:text-blue-900 dark:hover:text-white/80'>
            <ArrowRightIcon
              onClick={() => paginate(currentPage + 1)}
              className='font-bold bg-gray-300 dark:bg-gray-100/10 hover:bg-blue-900/80 dark:hover:bg-gray-100 hover:text-white dark:hover:text-black h-6 rounded-r-md'
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SummarizationContext;
