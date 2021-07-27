export const CHANGE_NAME = "PROFILE::CHANGE_NAME"
export const CHANGE_AGE = "PROFILE::CHANGE_AGE"
export const CHANGE_SHOW_NAME = "PROFILE::CHANGE_SHOW_NAME"


export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
})

export const changeAge = (age) => ({
    type: CHANGE_AGE,
    payload: {
        age
    }
})

export const changeShowName = (showName) => ({
    type: CHANGE_SHOW_NAME,
    // payload: {
    //     age
    // }
})