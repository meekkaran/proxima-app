/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";
import {
  ArrowDownTrayIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";

function GenerateReports() {
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(6);

  const reports = [
    {
      id: 1,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 2,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 3,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 4,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 5,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 6,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 7,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 8,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 9,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 10,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 11,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 12,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 13,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 14,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 15,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
    {
      id: 16,
      title: "Report",
      description:
        "Reports play a crucial role in decision-making and communication in various organizations and industries. They provide valuable insights and data that help stakeholders understand trends, patterns, and performance. Reports can also be used to highlight areas that need improvement and provide recommendations for action. Reports come in many different forms, including financial reports, market reports, sales reports, and performance reports, just to name a few. Effective reports are well-structured, easy to understand, and visually appealing, and they present information in a way that is meaningful and relevant to the intended audience. In today's data-driven world, reports are an essential tool for success and should be a key component of any organization's reporting strategy.",
      // reportImage: url("../../images/darkbrainlogo.jpg"),
    },
  ];

  // Get current reports
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const dispatch = useDispatch();
  // const handleDownload = () => {
  // dispatch(downloadReport(report));
  // };
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {currentReports.map((report) => (
          <div
            key={report.id}
            className='bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-md outline outline-1 outline-gray-300 transition-color cursor-pointer scale-95 hover:scale-100 transform transition duration-300 ease-out hover:outline-blue-900 dark:hover:outline-gray-100 dark:shadow-gray-800 dark:hover:shadow-gray-100'>
            <div className='relative flex-shrink-0 h-[200px]'>
              <Image
                src={coverpage}
                layout='fill'
                objectFit='cover'
                className='rounded-t-lg object-cover aspect-square'
              />
            </div>
            <div className='px-4 py-4'>
              <div className='flex flex-col gap-2'>
                <div className='bottom-0 left-0 right-0'>
                  <h1 className='text-black/90 dark:text-white text-lg font-medium'>
                    {report.title}
                  </h1>
                  <ul className='text-gray-600 dark:text-white/60 text-sm tracking-tight'>
                    <li className='text-left text-lg line-clamp-3'>
                      {report.description}
                    </li>
                  </ul>
                </div>
                <div className='flex self-end bottom-0 left-0 right-0'>
                  <button
                    type='button'
                    // onClick={handleDownload}
                    className='flex flex-row px-3 py-1 items-center text-white dark:text-black/90 bg-blue-900 dark:bg-white/90 rounded-lg outline-none focus:outline-none shadow-md focus:shadow-blue-900 dark:focus:shadow-gray-100 cursor-pointer '>
                    <span className='px-2 font-bold'>Download</span>
                    <ArrowDownTrayIcon className='h-6 w-6' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full pt-10 pb-5 flex justify-center'>
        <Pagination
          reportsPerPage={reportsPerPage}
          totalReports={reports.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

const Pagination = ({
  reportsPerPage,
  totalReports,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReports / reportsPerPage); i++) {
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

export default GenerateReports;
