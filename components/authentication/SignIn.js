import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { loginUser } from "../../redux/slices/authentication/authslice";

const Login = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //* refactor on production
    // dispatch(loginUser({ email, password })).then(() => {
    //   if (isAuthenticated) {
    //     router.push("/");
    //   }
    // });
    if (!isAuthenticated) {
      router.push("/");
    } else {
      router.push("/authentication/signin");
    }
  };

  const [text, count] = useTypewriter({
    words: [
      "Customer Satisfaction",
      "Customer Experience",
      "Customer Engagement",
      "PROXIMA",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-2 align-middle mx-auto'>
      <div className='hidden md:block rounded-md h-screen bg-gray-200 dark:bg-gray-800 shadow-md '>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace
          </h2>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace Technology
          </h2>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace Technology in
          </h2>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace Technology in Efficient
          </h2>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace Technology in Efficient Customer Sales Agents
          </h2>
          <h2 className='text-3xl text-blue-900 dark:text-white/80 font-medium p-2'>
            Embrace Technology in Efficient Customer Service Agents
          </h2>
          <h2 className='flex text-3xl text-blue-900 dark:text-white/80 font-medium justify-center items-center scroll-px-10 p-2'>
            <span className='pr-1'>{text} </span>
            <Cursor cursorColor='text-blue-900 dark:text-white/80' />
          </h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='container mx-auto'>
          <div className='max-w-md mx-auto my-10'>
            <div className='text-center'>
              <h1 className='my-3 text-3xl font-bold text-blue-900 dark:text-gray-200'>
                Welcome back to Proxima
              </h1>
              <h1 className='my-3 text-3xl font-semibold text-blue-900 dark:text-gray-200'>
                Sign in
              </h1>
              <p className='text-blue-400 decoration underline underline-offset-2 decoration-gray-400 hover:decoration-blue-400'>
                Sign in to access your account
              </p>
            </div>
            <div className='m-7'>
              <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    className='py-2 p-2 border text-black/80 dark:text-gray-800/80 font-medium bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-6'>
                  <div className='flex justify-between mb-2'>
                    <label
                      htmlFor='password'
                      className='text-sm text-gray-600 dark:text-gray-400'>
                      Password
                    </label>
                    <Link href='/authentication/forgotpassword'>
                      <a className='text-sm text-gray-800/70 dark:text-gray-300/70 focus:outline-none focus:text-blue-800 hover:text-blue-900 dark:hover:text-gray-300/80'>
                        Forgot password?
                      </a>
                    </Link>
                  </div>
                  <input
                    type='password'
                    id='password'
                    placeholder='Password'
                    className='py-2 p-2 border text-black/80 dark:text-gray-800/80 font-medium bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-6'>
                  <button
                    type='submit'
                    className='w-full px-3 py-4 text-white bg-blue-900 rounded-lg focus:bg-indigo-600 focus:outline-none'>
                    Login
                  </button>
                </div>
                <div className='text-xs md:text-sm text-center dark:text-gray-300/70 text-gray-800/70'>
                  Do not have an account yet ?
                  <Link href='/authentication/signup'>
                    <a className='text-blue-900 rounded-md px-2 decoration-blue-900 hover:underline underline-offset-1 dark:text-gray-100/80'>
                      Sign Up
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
