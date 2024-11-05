import React from 'react';
import '../styles/message.scss';

const MessageComponent = ({ message }) => {
  return (
    <div className="message">
      <p><strong>{message.sender}</strong>: {message.text}</p>
    </div>
  );
};

export default MessageComponent;
