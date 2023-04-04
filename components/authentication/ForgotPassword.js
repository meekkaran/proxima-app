import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import {
  setLoginFail,
  setLogin_Sucess,
} from "../../redux/slices/authentication/authslice";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

const ForgotPassword = (props) => {
  const router = useRouter();
  //const { isLoggedIn } = useSelector((state) => state.auth);
  //const { message } = useSelector((state) => state.message);
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

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  //Handling change in form data
  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const usersSignIn = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("email", email);
    formField.append("password", password);

    await axios({
      method: "post",
      url: "https://atiamcollege.proximadminserver.buzz/api/users/login",
      data: formField,
    })
      .then((response) => {
        //console.log(response.data.token);
        if (response.data) {
          dispatch(
            setLogin_Sucess({
              user: response.data,
            })
          );
          router.push("/");
          console.log(response.data);
        }

        return response.data;
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          dispatch(
            setLoginFail({
              error: error.response.data,
            })
          );

          //console.log(error.response.data.errors.error);
          //console.log(error.response.status);
          //console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          //console.log(error.request);
          dispatch(
            setLoginFail({
              error: error.request,
            })
          );
          dispatch(setLogin_Sucess(null));
        } else {
          // Something happened in setting up the request that triggered an Error
          dispatch(setLoginFail({ error: error.message }));
          dispatch(setLogin_Sucess(null));
        }
      });
  };

  return (
    <div className='flex flex-col md:grid md:grid-cols-1 h-screen justify-center content-center px-2 mx-auto'>
      <div className='container mx-auto'>
        <div className='max-w-md mx-auto my-10'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-blue-900 dark:text-gray-200'>
              Welcome to Proxima
            </h1>
            <h1 className='my-3 text-xl font-semibold text-black/80 dark:text-gray-200'>
              Enter your email to recover your account
            </h1>
          </div>
          <div className='m-7'>
            <form onSubmit={usersSignIn}>
              <div className='mb-6'>
                <label
                  //for="email"
                  className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='py-2 p-2 border text-black/80 dark:text-gray-800/80 font-medium bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className='mb-6'>
                <button
                  type='button'
                  className='w-full px-3 py-4 text-white bg-blue-900 font-bold rounded-md focus:bg-indigo-600 focus:outline-none'
                  onClick={usersSignIn}>
                  Send
                </button>
              </div>
              <div className='flex justify-center items-center text-xs md:text-sm text-center text-gray-800/70 dark:text-gray-300/70'>
                Return to Sign In account ?
                <Link href='/authentication/signin'>
                  <a className='text-blue-900 rounded-md px-2 decoration-blue-900 hover:underline underline-offset-1 text-blue'>
                    Sign In
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
