import { combineReducers, createStore } from 'redux';
import chatsReducer from './Reducer/chats';
import profileReducer from './Reducer/profile';
import messagesReducer from './Reducer/messages';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,

});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)