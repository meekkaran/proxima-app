import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  HomeIcon,
  MoonIcon,
  PhoneIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { selectUser } from "../../redux/slices/authentication/authslice";
import { animateScroll as scroll } from "react-scroll";
import DarkModeButton from "./DarkModeButton";

function Navbar({ toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const router = useRouter();
  const dispatch = useDispatch();

  // const user = useSelector(selectUser);
  //const token = user.user.h

  //console.log(user);
  const user = true;

  //* account settings
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //* handlesignout function
  const logOutHandler = (e) => {
    if (typeof window !== "undefined") {
      user = false;

      if (dispatch && dispatch !== null && dispatch !== undefined) {
        user = false;
        localStorage.removeItem("user");
        router.push("/authentication/signin");
      }
    }
  };
  //if (typeof window !== "undefined" && !isLoggedIn)
  //  router.push("/authentication/signin");
  const authLinks = (
    <>
      <div className='relative flex items-center  cursor-pointer my-auto mx-auto'>
        <HomeIcon
          className='relative items-center md:inline-flex h-9 bg-blue-900 rounded-full text-white p-1 mr-4 cursor-pointer hover:shadow-md'
          onClick={toggle}
        />
        <Link href='/' prefetch={false} className={""}>
          <a className='relative cursor-pointer'>
            <span
              // onClick={() => router.push("/")}
              className=''
              onClick={toggleHome}>
              <h1 className='sm:text-centre sm:text-lg md:text-xl font-bold text-xl text-blue-900 dark:text-white font-tesla'>
                PROXIMA
              </h1>
            </span>
          </a>
        </Link>
      </div>
      <Link href='/analytics/chatbasedsearch' className=''>
        <a className='hidden lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white font-bold hover:shadow-md transform transition-color ease-in-out dark:hover:shadow-gray-100 hover:shadow-blue-900/80 duration-200'>
          Search
        </a>
      </Link>
      <Link href='/analytics/descriptiveanalytics' className=''>
        <a className='hidden lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white font-bold hover:shadow-md transform transition-color ease-in-out dark:hover:shadow-gray-100 hover:shadow-blue-900/80 duration-200'>
          Descriptive
        </a>
      </Link>
      <Link href='/analytics/predictiveanalytics' className=''>
        <a className='hidden lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white font-bold hover:shadow-md transform transition-color ease-in-out dark:hover:shadow-gray-100 hover:shadow-blue-900/80 duration-200'>
          Predictive
        </a>
      </Link>
      <Link href='/summarization/summarization' className=''>
        <a className='hidden lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white font-bold hover:shadow-md transform transition-color ease-in-out dark:hover:shadow-gray-100 hover:shadow-blue-900/80 duration-200'>
          Summarization
        </a>
      </Link>
      <Link href='/customerfeedback/customerfeedback' className=''>
        <a className='hidden lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white font-bold hover:shadow-md transform transition-color ease-in-out dark:hover:shadow-gray-100 hover:shadow-blue-900/80 duration-200'>
          Feedback
        </a>
      </Link>
      {/* <a
        href='#!'
        onClick={(user = false)}
        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:scale-105 hover:shadow-md'>
        Sign Out
      </a> */}
    </>
  );
  const guestLinks = (
    <>
      <Link href={`/authentication/signin`}>
        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center'>
          <ArrowRightOnRectangleIcon className='md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-1 hover:shadow-xl' />
        </a>
      </Link>

      <a
        href='#!'
        onClick={(user = false)}
        className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full text-black/80  dark:text-white/90 dark:hover:text-black/90  items-center justify-center hover:bg-blue-900 hover:text-white hover:bold hover:shadow-md'>
        <ArrowRightOnRectangleIcon className='hidden md:inline-flex h-8 bg-blue-900 rounded-full text-white  p-2 cursor-pointer md: mx-2 hover:shadow-xl' />
      </a>
    </>
  );

  return (
    <header className=''>
      <nav className='fixed top-0 z-20 w-full flex items-center justify-between px-2 py-2 bg-white/80 dark:bg-zinc-900/80 shadow-md backdrop-blur-md'>
        <div className='items-center space-x-4 justify-center text-gray-500 dark:text-white cursor-pointer my-auto bg-blur'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto gap-2'>
            {user != null ? authLinks : guestLinks}
          </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <DarkModeButton />
          <div
            className='relative flex flex-row md:flex-row sm:flex-row lg:flex-row items-center text-gray-300 rounded-md outline-none divide-x divide-gray-300 space-x-1'
            onClick={toggleDropdown}>
            {/* <span className='text-xs block cursor-pointer font-semibold text-gray-500 dark:text-gray-300 hover:text-blue-900 dark:hover:text-white'>
              Sign In
            </span> */}
            <UserCircleIcon className='h-8 cursor-pointer text-blue-900 dark:text-gray-300 pl-1' />
          </div>
          {dropdownOpen && (
            <div className='absolute grid grid-row-3 right-2 top-12 z-10 w-auto items-center p-1 mt-2 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-lg rounded-md outline outline-1 outline-gray-300/80 shadow-md'>
              <button className='flex flex-row items-center p-1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-blue-900 dark:text-white/80 justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white dark:hover:text-black/90 hover:font-bold hover:shadow-md  transition-color  dark:hover:shadow-gray-100 hover:shadow-blue-900/80 cursor-pointer scale-90 hover:scale-100 transform transition ease-out duration-200'>
                <div className=''>
                  <EnvelopeIcon className='h-7 transform transition duration-300 ease-out' />
                </div>
                <h1 className='px-3 font-bold'>proximaagents@gmail.com</h1>
              </button>
              <button className='flex flex-row items-center p-1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-blue-900 dark:text-white/80 justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white dark:hover:text-black/90  hover:font-bold hover:shadow-md  transition-color   dark:hover:shadow-gray-100 hover:shadow-blue-900/80 cursor-pointer scale-90 hover:scale-100 transform transition ease-out duration-200'>
                <div className=''>
                  <PhoneIcon className='h-7 transform transition duration-300 ease-out' />
                </div>
                <h1 className='px-3 font-bold'>(+254) 790001947</h1>
              </button>
              <button
                onClick={logOutHandler}
                className='flex flex-row items-center p-1 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-blue-900 dark:text-white/80 justify-center hover:bg-blue-900 dark:hover:bg-white/80 hover:text-white dark:hover:text-black/90 hover:shadow-md dark:hover:shadow-gray-100 hover:shadow-blue-900/80 transition-color cursor-pointer scale-90 hover:scale-100 transform transition ease-out duration-200'>
                <h1 className='px-3 font-bold'>Sign Out</h1>
                <div className=''>
                  <ArrowRightOnRectangleIcon className='h-7 transform transition duration-300 ease-out' />
                </div>
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
