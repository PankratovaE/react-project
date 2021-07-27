import { combineReducers, createStore } from 'redux';
import profileReducer from './Reducer/profile';

const rootReducer = combineReducers({
    profile: profileReducer,

});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)