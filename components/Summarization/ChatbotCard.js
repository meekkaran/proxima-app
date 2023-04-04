/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ChatbotCard() {
  const [user_query, setUser_Query] = useState("");
  // const [timestamp, setTimestamp] = useState(new Data());

  // useEffect(() = {
  //   const interval= setInterval(() => {
  //     setTimestamp(newDate());
  //   }, 1000)
  //   return () => clearInterval(interval);
  // }, [])

  const dispatch = useDispatch();

  // useEffect(() => {
  // handleSubmit();
  // }, []);

  return (
    <>
      <div className='flex justify-end flex-col flex-grow rounded-md bg-gray-200 px-3 pt-2'>
        <div
          id='messages'
          className='flex flex-col justify-end flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-[250px] pb-3'>
          <div className='chat-message'>
            <div className='flex items-end'>
              <div className='flex flex-col space-y-2 text-xs max-w-xs ml-2 order-2 items-start'>
                <div>
                  <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none  text-gray-800 bg-white'>
                    messages
                  </span>
                  {/* {timestamp.toString()} */}
                </div>
              </div>
              <img
                src='https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
                alt='My profile'
                className='w-6 h-6 rounded-full order-1'
              />
            </div>
          </div>

          <div className='chat-message'>
            <div className='flex items-end justify-end'>
              <div className='flex flex-col space-y-2 text-xs max-w-xs mr-2 order-1 items-end'>
                <div>
                  <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '>
                    messages
                  </span>
                </div>
              </div>
              <img
                src='https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
                alt='My profile'
                className='w-6 h-6 rounded-full order-2'
              />
            </div>
          </div>
        </div>
        {/* <div className='flex flex-grow pt-10 justify-end items-center'>
          <PlusIcon className=' md:inline-flex h-10 text-blue-900 rounded-full p-2 cursor-pointer md:px-2' />
          <input
            // value={}
            // onChange={(e) => setSearchInput(e.target.value)}
            className='flex-grow bg-white/70 backdrop-blur-md outline-none text-sm text-blue-900 font-medium placeholder-gray-400 py-1 px-2 rounded-md shadow-md'
            type='text'
            placeholder='Type'
          />
          <PaperAirplaneIcon className=' md:inline-flex h-8 -rotate-45 bg-blue-900 text-white rounded-full p-2 cursor-pointer md: mx-2' />
        </div> */}
      </div>
    </>
  );
}

export default ChatbotCard;
