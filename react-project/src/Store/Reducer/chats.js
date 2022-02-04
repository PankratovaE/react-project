import { ADD_CHAT, DELETE_CHAT } from "../Action/chats";

const initialState = {
    chats: [
        {name: 'Chat #1', id: 1},
        {name: 'Chat #2', id: 2},
        {name: 'Chat #3', id: 3},
    ]
}

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_CHAT: {
            return {
                ...state,
                chats: [ ...state.chats, { name: action.payload.name, id: state.chats.length+1}]  
            }
        }
        case DELETE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload.id)
                
            }
        }
        default:
            return state
    }
}