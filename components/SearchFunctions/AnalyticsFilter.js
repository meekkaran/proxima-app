/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import SearchModal from "../analytics/SearchModal";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import ChatbotCard from "../Summarization/ChatbotCard";
import { useRouter } from "next/router";

// This filtering will be dynamic to each particular organization as what will happen is that it will be fetched from most popular topics and least popular topics.
function AnalyticsFilter({ searchOpen, searchToggle }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

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

  const items = [
    { id: 1, name: "Finances" },
    { id: 2, name: "Opening hours" },
    { id: 3, name: "Refunds" },
    { id: 4, name: "Promotions" },
    { id: 5, name: "Sales Team" },
    { id: 6, name: "Offers" },
    { id: 7, name: "Complaints" },
    { id: 8, name: "Appreciation" },
    { id: 9, name: "Internship" },
    { id: 10, name: "Investors" },
    { id: 11, name: "Marketing" },
  ];
  const selectors = [
    { id: 1, title: "Finances", path: "chats based on finances" },
    { id: 2, title: "Opening hours", path: "chats based on opening hours" },
    { id: 3, title: "Refunds", path: "chats based on refunds" },
    {
      id: 4,
      title: "Promotions",
      path: "chats based on promotions and more about promotions",
    },
    { id: 5, title: "Sales Team", path: "chats from the sales team on sales" },
    { id: 6, title: "Offers", path: "chats based on offers" },
    { id: 7, title: "Complaints", path: "chats based on complaints" },
    {
      id: 8,
      title: "Appreciation",
      path: "chats based on appreciation of assets",
    },
    { id: 9, title: "Internship", path: "details on internship" },
    { id: 10, title: "Investors", path: "chats and more info from investors" },
    {
      id: 11,
      title: "Marketing",
      path: "chats based on operations based on marketing",
    },
  ];

  const [showClear, setShowClear] = useState(false);

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
    <div className='flex flex-row place-items-start space-x-2 px-2 mx-auto max-w-7xl w-full h-screen'>
      {/* < */}
      <div
        // searchOpen={searchOpen}
        // onClick={searchToggle}
        // feature to be refactored to day
        // fixed w-full h-screen bg-white/60 dark:bg-zinc-900/80 backdrop-blur-xl grid grid-flow-row items-center top-0 left-0 transition-all duration-300 ease-in-out z-10 ${
        //           searchOpen
        //             ? "opacity-100 translate-y-0"
        //             : "opacity-0 -translate-y-full"
        //         }
        className={`  hidden md:block bg-white dark:bg-zinc-900/80 max-h-[500px]  max-w-[350px] outline outline-1 outline-gray-300 rounded-md p-3 shadow-md`}>
        {/* <SearchModal /> */}
        <div className='flex bg-white/40 dark:bg-gray-800/80 backdrop-blur-md text-gray-600 dark:text-white/80 placeholder-white/70 dark:placeholder-white/80 outline outline-1 outline-gray-300 items-center rounded-md p-1 shadow-md my-4'>
          {/* <form onSubmit={handleSubmit}> */}
          <div className=''>
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowClear(e.target.value !== "");
              }}
              className='flex-grow pl-5 bg-transparent font-medium outline-none text-sm '
              type='text'
              placeholder='Search...'
            />
          </div>
          <div className='flex flex-row items-center'>
            {searchTerm.length > 0 && (
              <XMarkIcon
                className='md:inline-flex bg-gray-300 dark:bg-gray-800 h-4 w-4 rounded-full cursor-pointer mr-1'
                onClick={() => setSearchTerm("")}
                hidden={!showClear}
              />
            )}
            <MagnifyingGlassIcon className='md:inline-flex h-8 bg-blue-900 text-white rounded-full p-2 cursor-pointer' />
          </div>
        </div>

        <div className='p-4 text-center max-h-[380px] overflow-y-auto'>
          <ul>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <li key={item.id}>
                  <div
                    className={`item ${
                      selectedItems.includes(item.id)
                        ? "bg-blue-900 p-2 font-bold text-white cursor-pointer shadow-md scale-95 hover:scale-100 transform transition duration-300 ease-in-out rounded-md hover:shadow-blue-900/80"
                        : "bg-gray-300 p-2 text-blue-900 dark:text-white/80 dark:hover:text-black/80 hover:bg-blue-900 dark:bg-gray-300/60 dark:hover:bg-white/80  hover:shadow-md dark:hover:shadow-gray-100/80 font-bold hover:text-white cursor-pointer shadow-md scale-95 hover:scale-100 transform transition duration-200 ease-in-out rounded-md hover:shadow-blue-900/80"
                    } `}
                    onClick={() => {
                      if (selectedItems.includes(item.id)) {
                        setSelectedItems(
                          selectedItems.filter((id) => id !== item.id)
                        );
                      } else {
                        setSelectedItems([...selectedItems, item.id]);
                      }
                    }}>
                    {item.name}
                  </div>
                  <button
                    onClick={() => {
                      // handle routing to main section
                    }}></button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='divide-y-2 divide-white'>
        {selectors
          .filter((selector) => selectedItems.includes(selector.id))
          .map((selector) => (
            <div
              className='p-2 bg-gray-200 text-black/60 hover:text-white dark:bg-gray-300/80 shadow-md border-b border-gray-600  w-[500px] text-gray-500 font-bold  hover:bg-blue-900 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-blue-900/80'
              key={selector.id}
              onClick={() => {
                if (selectedItems.includes(selector.id)) {
                  setSelectedItems(
                    selectedItems.filter((id) => id !== selector.id)
                  );
                } else {
                  setSelectedItems([...selectedItems, selector.id]);
                }
              }}>
              <h3 className='text-sm font-bold '>{selector.title}</h3>
              <p className='text-sm font-normal'>{selector.path} Information</p>
            </div>
          ))}
      </div>
      <div className='h-screen overflow-y-auto'>
        <div className='grid bg-gray-200 grid-cols-1 sm:grid-cols-1 px-2 gap-2'>
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
      </div>
    </div>
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

export default AnalyticsFilter;
