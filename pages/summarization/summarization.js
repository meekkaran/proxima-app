import React, { useState } from "react";
import Head from "next/head";
import { useSelector as Selector } from "react-redux";
import { selectUser } from "../../redux/slices/authentication/authslice";
import { useRouter } from "next/router";
import Navbar from "../../components/ui/Header";
import SummarizationContext from "../../components/Summarization/SummarizationContext";
import ContextHeader from "../../components/Home/ContextHeader";
import TrackDatesContext from "../../components/Summarization/TrackDatesContext";
import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";

function Summarization() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const user = true;
  // const user   = Selector(selectUser);
  // const token = user.user.token;

  //* Todo: refactor to auth signin after changes
  if (typeof window !== "undefined" && user == null) router.push("/");

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Summariztion</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <section className='mx-auto pt-8 max-w-7xl'></section> */}
      <div className='mx-auto pt-10 py-2 max-w-7xl'>
        <section className='p-2 pt-6'>
          <ContextHeader />
        </section>
        <div className='pt-12 px-2 flex flex-col space-y-2'>
          <TrackDatesContext />
          <section>
            <SummarizationContext />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Summarization;
