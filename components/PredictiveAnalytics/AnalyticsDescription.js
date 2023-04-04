import React from "react";

function AnalyticsDescription(props) {
  return (
    <>
      <h1 className='text-center font-bold text-lg text-gray-600 dark:text-white/80 pb-2'>
        Error rates
      </h1>
      <div className='bg-white dark:bg-zinc-800/80 p-4 shadow-md divide-x divide-gray-300 dark:divide-gray-300/80 h-[80px] w-full md:w-fit lg:w-fit  flex flex-row justify-center space-x-2 sm:space-x-0 md:space-x-1 items-center aspect-auto outline outline-1 outline-gray-300 dark:outline-gray-300/80 rounded-md mx-auto'>
        {props.errorRates.map((rate, index) => (
          <p
            key={index}
            className={`text-${
              rate > 0 ? "green" : "red"
            }-400 text-xs md:text-xl lg:text-xl font-bold p-3 md:p-4 lg:p-4`}>
            {rate}%
          </p>
        ))}
      </div>
    </>
  );
}

export default AnalyticsDescription;
