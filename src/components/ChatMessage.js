import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-6 border-2 rounded-full border-black"
        alt="user-icon"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
      />
      <p className="px-2 font-semibold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
