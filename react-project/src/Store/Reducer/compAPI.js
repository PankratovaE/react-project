import {
    SET_IDLE_STATUS,
    SET_LOADING_STATUS,
    SET_ERROR_STATUS,
    SET_COMP_DATA,
} from '../Action/compAPI'

export const DATA_REQUEST_STATUS = {

    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
}

const initialState = {
    list: [],
    status: DATA_REQUEST_STATUS.IDLE,
}

export default function testAPIReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: DATA_REQUEST_STATUS.IDLE,
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: DATA_REQUEST_STATUS.LOADING,
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: DATA_REQUEST_STATUS.ERROR,
            }
        case SET_COMP_DATA: {
            return {
                ...state,
                list: action.payload.data,
            }
        }
        default:
            return state
    }
}