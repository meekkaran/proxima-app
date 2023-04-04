import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import FilterContacts from "./FilterContacts";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

function SelectContacts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [contactPerPage] = useState(16);
  const contact_details = [
    {
      id: 1,
      contact: "0793681840",
      status: true,
    },
    {
      id: 2,
      contact: "0793681840",
      status: true,
    },
    {
      id: 3,
      contact: "0793681840",
      status: true,
    },
    {
      id: 4,
      contact: "0793681840",
      status: true,
    },
    {
      id: 5,
      contact: "0793681840",
      status: true,
    },
    {
      id: 6,
      contact: "0793681840",
      status: true,
    },
    {
      id: 7,
      contact: "0793681840",
      status: true,
    },
    {
      id: 8,
      contact: "0793681840",
      status: true,
    },
    {
      id: 9,
      contact: "0793681840",
      status: true,
    },
    {
      id: 10,
      contact: "0793681840",
      status: true,
    },
    {
      id: 11,
      contact: "0793681840",
      status: true,
    },
    {
      id: 12,
      contact: "0793681840",
      status: true,
    },
    {
      id: 13,
      contact: "0793681840",
      status: true,
    },
    {
      id: 14,
      contact: "0793681840",
      status: true,
    },
    {
      id: 15,
      contact: "0793681840",
      status: true,
    },
    {
      id: 16,

      contact: "0793681840",
      status: true,
    },
    {
      id: 17,
      contact: "0793681840",
      status: true,
    },
    {
      id: 18,
      contact: "0793681840",
      status: true,
    },
  ];

  // Get current summarization
  const indexOfLastContact = currentPage * contactPerPage;
  const indexOfFirstContact = indexOfLastContact - contactPerPage;
  const currentContacts = contact_details.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e, contact) => {
    if (e.target.checked) {
      setSelectedContacts([...selectedContacts, contact]);
    } else {
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    }
  };

  return (
    <div className='p-4 shadow-md outline outline-1 outline-gray-100 dark:outline-gray-300/80 rounded-md'>
      <div className='flex flex-col space-x-2'>
        <div className='flex flex-row items-center space-x-2 justify-between'>
          <h1 className='text-center text-lg font-bold text-gray-600 dark:text-white/80 py-2 pb-4'>
            Survey Respondents
          </h1>
          <h1 className='text-center text-base font-medium text-gray-600 dark:text-white/80 py-2 pb-4'>
            Select All
          </h1>
        </div>
        <FilterContacts />
      </div>
      <div className='grid grid-cols-2 px-2'>
        {currentContacts.map((contact_detail) => (
          <div key={contact_detail} className='flex flex-row text-center gap-2'>
            <input
              type='checkbox'
              className='form-checkbox text-indigo-600'
              checked={contact_detail.contact}
              onChange={handleChange}
            />
            <span className='text-sm text-gray-600'>
              {contact_detail.contact}
            </span>
            {/* <Checkbox
              color='primary'
              labelColor='primary'
              defaultSelected={contact_detail.status}
              size='sm'></Checkbox> */}
          </div>
        ))}
      </div>
      <div className='w-full pt-10 pb-5 flex justify-center'>
        <Pagination
          contactPerPage={contactPerPage}
          totalContacts={contact_details.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

const Pagination = ({
  contactPerPage,
  totalContacts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-md shadow-md outline outline-1 outline-gray-300'>
      <ul className='flex justify-center font-semibold'>
        {currentPage !== 1 && (
          <li className='cursor-pointer hover:text-blue-900 hover:text-white/80'>
            <ArrowLeftIcon
              onClick={() => paginate(currentPage - 1)}
              className='font-bold bg-gray-300 dark:bg-gray-100/10 hover:bg-blue-900/80 dark:hover:bg-gray-100 hover:text-white dark:hover:text-black h-6 rounded-l-md'
            />
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className='px-2 cursor-pointer hover:text-blue-900 dark:text-gray-100'>
            <span
              onClick={() => paginate(number)}
              className={
                number === currentPage
                  ? "px-2 text-white dark:text-black bg-blue-800 dark:bg-gray-100 rounded-md outline outline-1 outline-gray-300"
                  : ""
              }>
              {number}
            </span>
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li className='cursor-pointer hover:text-blue-900 dark:hover:text-white/80'>
            <ArrowRightIcon
              onClick={() => paginate(currentPage + 1)}
              className='font-bold bg-gray-300 dark:bg-gray-100/10 hover:bg-blue-900/80 dark:hover:bg-gray-100 hover:text-white dark:hover:text-black h-6 rounded-r-md'
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SelectContacts;
