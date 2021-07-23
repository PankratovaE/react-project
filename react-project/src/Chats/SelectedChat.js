import React from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';


const SelectedChat = (props) => {
  const timer = useRef(null);
  const [ messageList, setMessageList ] = useState([]);

  const params = useParams();

  useEffect(() => {
    setMessageList ([{author: 'Robot', text: "Let's talk!"}]);
   }, []);

  useEffect(() => {

    if (messageList.length && messageList[messageList.length-1].author !== 'Robot') {
        timer.current = setTimeout(() => {
        setMessageList ([...messageList, { author: 'Robot', text: 'Good message!'}]);
      }, 1500);

    }
  }, [ messageList ]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, []);

  const handleSubmit = (newMessage, newAuthor) => {
    setMessageList((currentMessageList) => [
      ...currentMessageList, {author: newAuthor, text: newMessage}
    ])

  }

  return (
    <div className="chat-form">
      <div className="chat-message">
        <p>You are in the chat { params.chatId }</p>
        <hr className="chat-form_hr"/>
        { messageList.map((mes, index) => 
      <Message 
        key={index}
        text={mes.text}
        author={mes.author}/>
        )}
        <hr className="chat-form_hr"/>
      <MessageForm onSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default SelectedChat;