import React, { useState, useEffect } from "react";
import Head from "next/head";
import ChatList from "../../components/chats/ChatList";
import Navbar from "../../components/ui/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authentication/authslice";
import Router, { useRouter } from "next/router";
import AnalyticsFilter from "../../components/SearchFunctions/AnalyticsFilter";
import Sidebar from "../../components/ui/Sidebar";
import ChatHome from "../../components/chats/ChatHome";

function ChatBasedanAlytics() {
  const router = useRouter();
  const { SearchItems } = router.query;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const user = useSelector(selectUser);
  // const token = user.user.token;
  const user = true;

  // if (typeof window !== "undefined" && user == null)
  //   router.push("/authentication/signin");

  // const user = useSelector(selectUser);
  // const token = user.user.token;

  // //* refactor to auth signin
  // if (typeof window !== "undefined" && user == null) router.push("/");

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Search</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className='mx-auto pt-8 max-w-7xl'>
        <div className='pt-10 fixed flex flex-row  place-items-start space-x-2 px-2 mx-auto max-w-7xl w-full h-screen'>
          <AnalyticsFilter />
        </div>
      </div>
    </div>
  );
}

export default ChatBasedanAlytics;
