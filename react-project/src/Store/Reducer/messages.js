import { ADD_MESSAGE, DELETE_MESSAGE } from "../Action/messages";

const initialState = {
    messages: [
        {id: 0, author: 'Robot', text: "Let's talk!", chatId: null},
        {id: 1, author: '1', text: "111", chatId: 1},
        {id: 2, author: '2', text: "222", chatId: 2},
        {id: 3, author: '3', text: "333", chatId: 3},
    ]
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [ ...state.messages, { id: state.messages.length + 1, author: action.payload.author, text: action.payload.text, chatId: action.payload.id}]  
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload.id )
                
            }
        }
        default:
            return state
    }
}