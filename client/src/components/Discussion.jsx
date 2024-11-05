// src/components/Discussion.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { images } from './images'; // ייבוא מערך התמונות
import { listenForMessages, sendMessage, disconnectSocket } from '../axios/socketService';  // ייבוא פונקציות סוקט
import '../styles/discussion.scss'; // סגנונות לדף הדיון

const Discussion = () => {
  const { id } = useParams();  // קבלת ה-id מה-URL
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // שימוש ב- useEffect כדי לטעון את התמונה שנבחרה לפי ה-id
  useEffect(() => {
    const selectedImage = images.find((img) => img.id === parseInt(id));  // מוצא את התמונה שנבחרה
    setImage(selectedImage); // עדכון מצב התמונה

    // מאזין להודעות חדשות וכולל את הפונקציה של קבלת ההודעות
    listenForMessages((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // ניתוק מהסוקט בעת עזיבת הדף
      disconnectSocket();  // עכשיו הפונקציה הזו תהיה זמינה
    };
  }, [id]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // אם ההודעה ריקה, לא שולחים אותה

    // יצירת ההודעה
    const message = {
      content: newMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    sendMessage(message);  // שולחים את ההודעה לשרת
    setMessages((prevMessages) => [...prevMessages, message]);  // עדכון מצב ההודעות
    setNewMessage('');  // איפוס תיבת ההודעה
  };

  if (!image) return <div>Loading...</div>;  // אם התמונה לא נטענה, מציגים הודעת טעינה

  return (
    <div className="discussion-page">
      {/* הצגת התמונה */}
      <div className="image-container">
        <img src={image.src} alt={image.name} className="image" />
        <div className="image-info">
          <h2>{image.name}</h2>
          <p>Artist: {image.artist}</p>
          <p>{image.description}</p>
        </div>
      </div>

      {/* ממשק צ'אט */}
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.content}</p>
              <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
