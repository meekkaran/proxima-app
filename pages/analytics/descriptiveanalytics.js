import React, { useState } from "react";
import { useSelector as Selector } from "react-redux";
import Head from "next/head";
import Navbar from "../../components/ui/Header";
import CumulativeTrends from "../../components/analytics/CumulativeTrends";
import Hourlystatus from "../../components/analytics/hourlystatus";
import Userengagementtrend from "../../components/analytics/userengagementtrend";
import CumulativeHourlyTrend from "../../components/analytics/CumulativeHourlyTrend";
import Channelengagementgraph from "../../components/analytics/channelengagementgraph";
import MostPopularTopics from "../../components/analytics/MostPopularTopics";
import Newstatus from "../../components/analytics/hourlystatus copy";
import { useRouter } from "next/router";
import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";

const Descriptiveanalytics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  // try {
  //   const user = Selector(selectUser);
  //   console.log(user);
  //   const token = user.user.token;
  //   console.log(user.user);
  // } catch (err) {
  //   //* change to null after changes

  //   //* refactor user to auth signin
  const user = true;
  //   router.push("/");
  // }

  // * refactor to auth signin
  // if (typeof window !== "undefined" && user == null) router.push("/");
  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Descriptive</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className='mx-auto  divide-y divide-gray-300 dark:divide-gray-300/80 pt-[60px] max-w-7xl '>
        <section className='dark:bg-gray-800 border-x py-5 border-gray-300 dark:border-gray-100'>
          <div className='flex flex-col md:flex-row lg:flex-row gap-2 px-2 space-y-3'>
            <CumulativeTrends />
            <div className='flex flex-col space-y-6 gap-4 border-gray-300'>
              <Hourlystatus />
              <Newstatus />
            </div>
          </div>
        </section>
        <section className='dark:bg-gray-800 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  py-4 px-4 border-x border-gray-300 '>
          <MostPopularTopics />
          <Channelengagementgraph />
        </section>
        <section className='dark:bg-gray-800 border-x border-gray-300 py-4 px-4'>
          <CumulativeHourlyTrend />
        </section>

        <section className='dark:bg-gray-800 py-4 px-4 border-x border-gray-300'>
          <Userengagementtrend />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Descriptiveanalytics;
