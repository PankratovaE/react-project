import '../App.css';
import { useState } from 'react';
import { Button, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { addChat, deleteChat } from '../Store/Action/chats';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from '../Selectors/chats';
import { v4 as uuidv4 } from 'uuid';



const Chats = () => {

    const [ chatName, setChatName ] = useState('');

    const dispatch = useDispatch()
    let { chats } = useSelector(chatsSelector)

    const handleChatNameSubmit = (event) => {
        event.preventDefault()
        dispatch(addChat(chatName, uuidv4()))
        setChatName('')
    }
    const handleChatName = (event) => {
        setChatName(event.target.value)
    }
    const handleDeleteChat = (id) => {
        dispatch(deleteChat(id))
    }

    return (
        <>
            <List>{ chats.map((chat) => 
                <ListItem key={chat.id} >
                    <Link to={`/chats/${chat.id}`} chatName={chat.name}>{ chat.name }</Link>
                    <Button onClick={() => handleDeleteChat(chat.id)}>Delete chat</Button>
                </ListItem>) }
            </List>
            <form onSubmit={ handleChatNameSubmit }>
                <TextField
                    label="Chat name"
                    value={ chatName }
                    onChange={ handleChatName }
                />
                <button type="submit" className="form__button">Create chat</button>
            </form>
        </>
    )
};

export default Chats;