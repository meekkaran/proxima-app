import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/ui/Header";
import { useSelector as Selector } from "react-redux";
import { selectUser } from "../../redux/slices/authentication/authslice";
import { useRouter } from "next/router";
import MonthlyForecasting from "../../components/PredictiveAnalytics/MonthlyForecasting";
import { CumulativeHourlyPrediction } from "../../components/PredictiveAnalytics/CumulativeHourlyPrediction";
import { ChatMeansPrediction } from "../../components/PredictiveAnalytics/ChatMeansPrediction";
import { MultipleDoughnut } from "../../components/PredictiveAnalytics/MultipleDoughnut";
import { EscalatedConversationsPrediction } from "../../components/PredictiveAnalytics/EscalatedConversationsPrediction";
import { PieChart } from "../../components/PredictiveAnalytics/PieChart";
import { MultiAxis } from "../../components/PredictiveAnalytics/MultiAxis";
import { BarGrouped } from "../../components/PredictiveAnalytics/BarGrouped";
import { Events } from "../../components/PredictiveAnalytics/Events";
import AnalyticsDescription from "../../components/PredictiveAnalytics/AnalyticsDescription";
import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";

function Predictiveanalytics() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  // const user = Selector(selectUser);
  //* revert to the user selector, delete user = true
  const user = true;
  // const token = user.user.token;

  //* refactor to auth signin
  if (typeof window !== "undefined" && user == null) router.push("/");

  //* analytics description errorrates
  const errorRates = [-4, 4, -4, 4, -4];

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Predictive</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className='mx-auto pt-8 max-w-7xl '>
        <div className='w-full h-auto pt-5 divide-y divide-gray-300 dark:divide-gray-300/80'>
          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2  border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <MonthlyForecasting />
          </section>
          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2 border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <CumulativeHourlyPrediction />
          </section>

          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2 border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <ChatMeansPrediction />
          </section>

          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2 border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <EscalatedConversationsPrediction />
          </section>
          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2 border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <BarGrouped />
          </section>
          <section className='dark:bg-gray-800 py-6 px-3 sm:px-1 md:px-2 border-x border-gray-300 dark:divide-gray-300/80'>
            <AnalyticsDescription errorRates={errorRates} />
            <PieChart />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Predictiveanalytics;
