import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

import { generateRandomName, getRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const chatInterval = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomSentence(),
        })
      );
    }, 1500); // fetch chat data after every 2 seconds
    return () => clearInterval(chatInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            // Don't use index for keys
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border-b-2 border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.length > 0) {
            dispatch(
              addMessage({
                name: "Piyush Lund",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }
        }}>
        <input
          className="px-2 w-3/4  focus:outline-none"
          type="text"
          placeholder="Write something"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-slate-50"> ⟩ </button>
      </form>
    </>
  );
};

export default LiveChat;
