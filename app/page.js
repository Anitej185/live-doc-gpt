'use client';

import React, { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import './style.css'; // Import the CSS file

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesContainerRef = useRef(null);

  // Scroll to the bottom of the messages container whenever messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatContainer">
      <div ref={messagesContainerRef} className="messagesContainer">
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
      </form>
    </div>
  );
}