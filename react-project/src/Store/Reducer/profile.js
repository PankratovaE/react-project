import { CHANGE_NAME, CHANGE_AGE, CHANGE_SHOW_NAME } from "../Action/profile";

const initialState = {
    name: "Kate", 
    age: 37,
    showName: true,
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
        default:
            return state
    }
}