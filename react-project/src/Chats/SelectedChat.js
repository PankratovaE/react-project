import React, { useCallback } from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addMessageWithThunk, deleteMessage } from '../Store/Action/messages';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { messagesSelector } from '../Selectors/messages';

const SelectedChat = (props) => {

  const params = useParams();
  const dispatch = useDispatch()
  let { messages } = useSelector(messagesSelector)
  const [ messageList, setMessageList ] = useState([]);

  useEffect(() => {

    setMessageList(messages.filter((item) => item.chatId === +params.chatId))

  }, [ messages ])

  const handleSubmit = useCallback((newMessage, newAuthor, id) => {

    dispatch(addMessageWithThunk(newAuthor, newMessage, +params.chatId))
    
  }, [params.chatId, dispatch])

  const handleDeleteMessage = (id, index) => {

    setMessageList((currentMessageList) => currentMessageList.splice(index, 1))
    dispatch(deleteMessage(id))

  }

  return (
    <div className="chat-form">
      <div className="chat-message">
        <p>You are in the chat { params.chatId }</p>
        <hr className="chat-form_hr"/>
        { messageList.map((mes, index) => 
          <div className="message-block">
            <Message 
              key={mes.id}
              text={mes.text}
              author={mes.author}/>
            <Button onClick={() => handleDeleteMessage(mes.id, index)}>&#10005;</Button>
              </div>)}
              <hr className="chat-form_hr"/>
            <MessageForm onSubmit={handleSubmit}/>
          </div>
    </div>
  )
}

export default SelectedChat;