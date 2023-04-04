/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setChatbotChat,
  setChatbotChatlist,
  setChatSlotIntent,
} from "../../redux/slices/analytics/analyticsslice";
import { selectUser } from "../../redux/slices/authentication/authslice";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import ChatbotCard from "../Summarization/ChatbotCard";

function ChatHome({ initialFilter }) {
  const results = useResults();
  const filteredResults = results.filter((result) => result.item === item);
  const user = useSelector(selectUser);

  const [chatbotchat, setchatbotchat] = useState([]);
  const [chatslotintents, setchatslotintents] = useState([]);
  const [listchatslotintents, setlistchatslotintents] = useState([]);

  const dispatch = useDispatch();

  return (
    <div className='w-full h-screen'>
      <main className='bg-white rounded-md outline outline-1 outline-gray-300'>
        {filteredResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </main>
    </div>
  );
}

export default ChatHome;
