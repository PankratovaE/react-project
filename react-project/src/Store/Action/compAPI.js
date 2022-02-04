import axios from 'axios'


const API_URL = 'http://ccdb.hemiola.com/characters/radicals/85?filter=gb'
const transport = axios.create()

export const SET_COMP_DATA = 'TESTAPI::SET_COMP_DATA'
export const SET_ERROR_STATUS = 'TESTAPI::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'TESTAPI::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'TESTAPI::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })

export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })

export const setCompData = (data) => ({
    type: SET_COMP_DATA,
    payload: {
        data,
    },
})


export const fetchData = () => {
    return async (dispatch) => {
        dispatch(setLoadingStatus())

        try {
            const { data } = await transport.get(API_URL)

            dispatch(setIdleStatus())
            dispatch(setCompData(data))
        } catch (error) {
            console.error('error', error)

            dispatch(setErrorStatus())
        }
    }
}

export const repeateFetchData = () => {
    return async (dispatch) => {
        dispatch(setIdleStatus())
        dispatch(setLoadingStatus())
        try {
            const { data } = await transport.get(API_URL)
            dispatch(setIdleStatus())
            dispatch(setCompData(data))
        } catch (error) {
            console.error('error', error)
            dispatch(setErrorStatus())
        }
    } 
}