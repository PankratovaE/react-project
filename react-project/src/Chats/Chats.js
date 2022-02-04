import '../App.css';
import { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';



const Chats = () => {

    const [ chatList, setChatList ] = useState([]);

    useEffect(() => {
      setChatList([
          {name: 'Chat #1', id: 'ch01'},
          {name: 'Chat #2', id: 'ch02'},
          {name: 'Chat #3', id: 'ch03'},
          {name: 'Chat #4', id: 'ch04'}
        ]);
    }, []);

    return (
        <List>{chatList.map((chat) => 
            <ListItem key={chat.id} >
                <Link to={`/chats/${chat.id}`}>{ chat.name }</Link>
            </ListItem>) }
        </List>
    )
};

export default Chats;