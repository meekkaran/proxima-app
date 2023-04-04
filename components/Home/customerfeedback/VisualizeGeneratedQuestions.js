import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

function VisualizeGeneratedQuestions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [generatedQuestionPerPage] = useState(8);
  const generated_questions = [
    {
      id: 1,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 2,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 3,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 4,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 5,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 6,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 7,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 8,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 9,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 10,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 11,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 12,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 13,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 14,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 15,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 16,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 17,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
    {
      id: 18,
      text: "What do you think is the best way for us to frame the longest ever constructed question and still make sense?",
    },
  ];

  // Get current summarization
  const indexOfLastGeneratedQuestion = currentPage * generatedQuestionPerPage;
  const indexOfFirstGeneratedQuestion =
    indexOfLastGeneratedQuestion - generatedQuestionPerPage;
  const currentGeneratedQuestion = generated_questions.slice(
    indexOfFirstGeneratedQuestion,
    indexOfLastGeneratedQuestion
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className='text-center text-lg text-gray-600 dark:text-white/80 font-extrabold py-2 pb-2'>
        Questions Generated
      </h1>
      {currentGeneratedQuestion.map((generated_question) => (
        <div
          key={generated_question.id}
          className='p-2 bg-gray-200 dark:bg-gray-300/80 shadow-md border-b border-gray-600'>
          <h4 className='text-sm font-normal text-black/60'>
            {generated_question.text}
          </h4>
        </div>
      ))}
      <div className='w-full pt-10 pb-5 flex justify-center'>
        <Pagination
          generatedQuestionPerPage={generatedQuestionPerPage}
          totalQuestion={generated_questions.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

const Pagination = ({
  generatedQuestionPerPage,
  totalQuestion,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalQuestion / generatedQuestionPerPage);
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

export default VisualizeGeneratedQuestions;
