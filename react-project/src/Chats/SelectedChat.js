import React, { useCallback } from 'react';
import MessageForm from '../MessageForm';
import Message from '../Message';
import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addMessageWithThunk, deleteMessage, subscribeOnMessageChanging, addMessagesDb, cleanChat, deleteMessageDb } from '../Store/Action/messages';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import { messagesSelector } from '../Selectors/messages';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

const SelectedChat = (props) => {

  const params = useParams();
  const dispatch = useDispatch()
   // let { messages } = useSelector(messagesSelector)
  // const [ messageList, setMessageList ] = useState([]);
  const messageList = useSelector(state => state.messages[params.chatId] || [])
  // const [ messagesDb, setMessagesDb] = useState([])

  useEffect(() => {
    console.log('in use effect selected chat')

    dispatch(cleanChat(params.chatId))
    dispatch(subscribeOnMessageChanging(params.chatId))
  }, [])

  // useEffect(() => {

  //   setMessageList(messages.filter((item) => item.chatId === +params.chatId))

  // }, [ messages ])

  // const subscribeOnMessageChanging = (chatId, callback) => {
  //   firebase
  //     .database()
  //     .ref('messages')
  //     .child(chatId)
  //     .on('child_added', (snapshot) => {
  //       callback(snapshot.val())
  //     })

  //   firebase
  //     .database()
  //     .ref('messages')
  //     .child(chatId)
  //     .on('child_changed', (snapshot) => {
  //       callback(snapshot.val())
  //     })
      
  // }


  // useEffect(() => {
  //   subscribeOnMessageChanging(params.chatId, (message) => {
  //     setMessagesDb((oldMessageList) => [...oldMessageList, message])
  //   })
  // }, [])
  



  // useEffect(() => {
  //   firebase.database()
  //           .ref('messages')
  //           .child(params.chatId)
  //           .on('value', (snapshot) => {
  //             const mesDbArr = []
  //             snapshot.forEach(item => {
  //               mesDbArr.push(item.val())
  //             })
  //           setMessagesDb(mesDbArr)
  //           })
  // }, [])

  const handleSubmit = (text, author) => {
     console.log(params)
    dispatch(addMessagesDb(params.chatId, {
      id: uuidv4(),
      author: author,
      text: text
    }))
   
  }

  const handleDeleteMessage = (id) => {

    // setMessageList((currentMessageList) => currentMessageList.splice(index, 1))
    // dispatch(deleteMessage(id))
    dispatch(deleteMessageDb(params.chatId, id))

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