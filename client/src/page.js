'use client';

import React, { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import './style.css'; // Import the CSS file
import { useState } from 'react';
import axios from "axios";

export default function Chat() {
  const { messages, setMessages, input, setInput, handleInputChange, handleSubmit } = useChat();
  const {loader, setLoader} = useState(-1);
  // const messagesContainerRef = useRef(null);
  
  // handleInputChange = (event) => {
  //   setInput(event.target.value);
  // }
  
  // // handleSubmit = (event) => {
  // //   event.preventDefault();
  // //   setLoader(0)
  // //   axios.post('http://localhost:1234/api/message', { message: input })
  // //     .then(function (response) {
  // //       setLoader(1)
  // //       console.log(response);
  // //       const msgAssistant = {
  // //         id: messages.length + 1,
  // //         content: response["data"]["result"],
  // //         role: 'assistant',
  // //       }
  // //       const msgUser = {
  // //         id: messages.length + 2,
  // //         content: response["data"]["query"],
  // //         role: 'user',
  // //       }
  // //       setMessages([...messages, msgAssistant, msgUser])
  // //     })
  // //     .catch(function (error) {
  // //       setLoader(0)
  // //       console.log(error);
  // //     });
  // // }
  // // // Scroll to the bottom of the messages container whenever messages change
  // // useEffect(() => {
  // //   if (messagesContainerRef.current) {
  // //     messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  // //   }
  // // }, [messages]);

  return (
    <div className="chatContainer">
      {/* <div ref={messagesContainerRef} className="messagesContainer">
        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === 'assistant' ? 'systemMessage' : 'userMessage'}
          >
            <div className="messageContent">{m.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="inputForm">
        <input
          value={input}
          placeholder="What did you dream of..."
          onChange={handleInputChange}
          className="inputField"
        />
      </form> */}
    </div>
  );
}