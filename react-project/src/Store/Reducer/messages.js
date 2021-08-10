import { ADD_MESSAGE, DELETE_MESSAGE, CLEAN_CHAT } from "../Action/messages";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    //chatId: [
    // {id: 1, author: '1', text: "111"},
    //]
    // messages: [
    //     {id: 0, author: 'Robot', text: "Let's talk!", chatId: null},
    //     {id: 1, author: '1', text: "111", chatId: 1},
    //     {id: 2, author: '2', text: "222", chatId: 2},
    //     {id: 3, author: '3', text: "333", chatId: 3},
    // ]
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [ ...(state[action.payload.chatId] || []),
                    action.payload.message
                ]
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: state[action.payload.chatId].filter((item) => item.id !== action.payload.id )
                
            }
        }
        case CLEAN_CHAT: {
            return {
                ...state,
                [action.payload.chatId]: []
            }
        }
        default:
            return state
    }
}