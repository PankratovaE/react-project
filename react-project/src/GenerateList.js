import './App.css';
import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';


const GenerateList = () => {

    const [ chatList, setChatList ] = useState([]);

    useEffect(() => {
      setChatList([{name: 'Chat #1', id: 'ch01'}, {name: 'Chat #2', id: 'ch02'}, {name: 'Chat #3', id: 'ch03'}]);
    }, []);

    function generate() {
        return chatList.map((chat) => 
        <ListItem key={chat.id}>
            <ListItemText primary={chat.name} />
        </ListItem>)
    }

    return (
        <List>{ generate() }</List>
    )
};

export default GenerateList;