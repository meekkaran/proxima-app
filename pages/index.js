/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { useRouter } from "next/router";
import ContextHeader from "../components/Home/ContextHeader";
import GainsTemplate from "../components/Home/GainsTemplate";
import GenerateReports from "../components/Home/GenerateReports";
import HighlightsKeys from "../components/Home/HighlightsKeys";
import Navbar from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";
import { useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Footer from "../components/ui/Footer";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  // try {
  //   const user = useSelector(selectUser);
  //   console.log(user);
  //   const token = user.user.token;
  //   console.log(user.user);
  // } catch (err) {
  const user = true;
  //   router.push("/");
  // }

  // const user = useSelector(selectUser);
  if (!user) {
    router.push("/");
  }

  // if (typeof window !== "undefined" && user == null)
  //   router.push("/authentication/signin");

  return (
    <div className='bg-gray-100 dark:bg-zinc-800 transition-all duration-700 overflow-hidden scroll-smooth'>
      <Head>
        <title>Proxima | Home</title>
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className='mt-[60px] max-w-6xl mx-auto'>
        <section className='p-2 pt-10'>
          <ContextHeader />
        </section>
        <section className='py-8 px-1'>
          <GenerateReports />
        </section>
        <section className='px-2 py-8'>
          <HighlightsKeys />
        </section>
        <section className='py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-2'>
          <div className=''>
            <h1 className='flex flex-row items-center gap-2 font-bold scale-x-95'>
              Top wins
              <ArrowUpIcon className='md:inline-flex h-8 bg-green-100 fill-green-900 rounded-full text-green-400 border border-green-400  p-2 cursor-pointer md:mx-2' />
            </h1>
            <div className='pt-3 space-y-6'>
              <GainsTemplate />
              <GainsTemplate />
            </div>
          </div>

          <div>
            <h1 className='flex flex-row items-center gap-2 font-bold scale-x-95'>
              Top losses
              <ArrowDownIcon className='md:inline-flex h-8 bg-red-100 fill-red-900 rounded-full text-red-400 border border-red-400  p-2 cursor-pointer md:mx-2' />
            </h1>
            <div className='pt-3 space-y-6'>
              <GainsTemplate />
              <GainsTemplate />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

// git remote add origin https://github.com/Proximaagent/ProximaCoolKids.git
// git branch -M main
// git push -u origin main
