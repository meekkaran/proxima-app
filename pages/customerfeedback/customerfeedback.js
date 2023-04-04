import React, { useState } from "react";
import Head from "next/head";
import { useSelector as Selector } from "react-redux";
import { selectUser } from "../../redux/slices/authentication/authslice";
import { useRouter } from "next/router";
import Navbar from "../../components/ui/Header";
import ContextHeader from "../../components/Home/ContextHeader";
import TrackDatesContext from "../../components/Summarization/TrackDatesContext";
import CustomerFeedbackContext from "../../components/Home/customerfeedback/CustomerFeedbackContext";
import FeedbackContextHeader from "../../components/Home/customerfeedback/FeedbackContextHeader";
import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";

function Customerfeedback() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  //* remove user = true after customizations
  const user = true;
  // const user   = Selector(selectUser);
  // const token = user.user.token;

  //* Todo: refactor to auth signin
  if (typeof window !== "undefined" && user == null) router.push("/");

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Feedback</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className='mx-auto pt-12 max-w-7xl'>
        <section className='flex px-2 pt-6'>
          <FeedbackContextHeader />
        </section>
        <div className='pt-12 px-2 flex flex-col space-y-2'>
          <TrackDatesContext />
          <section>
            <CustomerFeedbackContext />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Customerfeedback;
useState;
