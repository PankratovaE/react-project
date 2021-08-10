import { CHANGE_NAME, CHANGE_AGE, CHANGE_SHOW_NAME, CHANGE_IS_AUTHED } from "../Action/profile";

const initialState = {
    name: "Kate", 
    age: 37,
    showName: true,
    isAuthed: false,
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        case CHANGE_AGE: {
            return {
                ...state,
                age: action.payload.age
            }
        }
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed
            }
        }
        default:
            return state
    }
}