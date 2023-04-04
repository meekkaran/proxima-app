import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      isOpen={isOpen}
      onClick={toggle}
      className={`fixed w-full h-screen bg-white/60 dark:bg-zinc-900/80 backdrop-blur-xl grid grid-flow-row items-center top-0 left-0 transition-all duration-300 ease-in-out z-10 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } `}>
      <div className='text-blue-900 inline-flex flex-col top-0'>
        <div className='absolute top-20 right-0'>
          <XCircleIcon
            onClick={toggle}
            className='h-10 w-20 cursor-pointer text-gray-300 dark:text-gray-500 hover:text-blue-900 dark:hover:text-gray-300 transform transition duration-300 ease-out'
          />
        </div>
        <ul className='grid grid-cols-1 grid-rows-6 items-center sm:grid-rows-6 mx-auto w-2/4'>
          <Link href='/'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md shadow-blue-900/80 transition-color duration-200'>
              Home
            </a>
          </Link>
          <Link href='/analytics/chatbasedsearch'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200'>
              Search
            </a>
          </Link>
          <Link href='/analytics/descriptiveanalytics'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200'>
              Descriptive
            </a>
          </Link>
          <Link href='/analytics/predictiveanalytics'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200'>
              Predictive
            </a>
          </Link>
          <Link href='/summarization/summarization'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200'>
              Summarization
            </a>
          </Link>
          <Link href='/customerfeedback/customerfeedback'>
            <a className='inline-flex w-auto px-3 py-2 rounded-md text-black/80 dark:text-white/80 dark:hover:text-black/80 dark:hover:bg-white/80 hover:font-bold items-center justify-center hover:bg-blue-900 hover:text-white hover:shadow-md transition-color duration-200'>
              Feedback
            </a>
          </Link>
        </ul>
        <div className='flex flex-col mt-4 justify-center space-y-4'>
          {/* <Link href='/authentication/signin'>
            <a className='inline-flex flex-row items-center w-2/3 place-self-center px-3 py-2 rounded-md text-blue-900 dark:text-white/80 justify-center hover:bg-blue-900 hover:text-white dark:hover:text-black/90 dark:hover:bg-white/90 hover:shadow-md transition-color cursor-pointer scale-90 hover:scale-100 transform transition ease-out duration-200 outline outline-1 outline-gray-400 dark:outline-zinc-500/80 shadow-md'>
              <h1 className='px-3 font-bold'>Sign In</h1>
              <ArrowLeftOnRectangleIcon className='h-5 font-bold transform transition duration-300 ease-out' />
            </a>
          </Link> */}
          <Link href='/authentication/signin'>
            <a className='inline-flex flex-row items-center w-2/3 place-self-center px-3 py-2 rounded-md text-blue-900 dark:text-white/80 justify-center hover:bg-blue-900 hover:text-white dark:hover:text-black/90 dark:hover:bg-white/90 hover:shadow-md transition-color cursor-pointer scale-90 hover:scale-100 transform transition ease-out duration-200 outline outline-1 outline-blue-900 dark:outline-zinc-100/50 shadow-md'>
              <h1 className='px-2 font-bold'>Sign Out</h1>
              <ArrowRightOnRectangleIcon className='h-5 font-bold transform transition duration-300 ease-out' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
