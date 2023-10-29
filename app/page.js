'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className='chatContainer'>
      <div className = 'messagesContainer'>
        {messages.map(m => (
          <div key = {m.id} className = {m.role === 'assistant' ? 'systemMessage' : 'userMessage'}>
            <div className = 'messageContent'>{m.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit = {handleSubmit} className = 'inputForm'>
        <input value = {input} onChange = {handleInputChange} input placeholder = "Send a message here" className = 'inputField' />
      </form>
    </div>
  );
}
