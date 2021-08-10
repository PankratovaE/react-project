import firebase from 'firebase'
export const ADD_CHAT = "CHATS::ADD_CHAT"
export const DELETE_CHAT = "CHATS::DELETE_CHAT"


export const addChat = (name, id) => ({
    type: ADD_CHAT,
    payload: {
        name,
        id
    }
})

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: {
        id
    }
})

export const addChatsDb = (name, chatId) => (dispatch) => {
    firebase.database().ref('chats').child(chatId).push()
    dispatch(addChat(name, chatId))
}

export const subscribeOnChatsChanging = (chatId) => (dispatch, getState) => {
    firebase
      .database()
      .ref('chats')
      .child(chatId)
      .on('child_added', (snapshot) => {
        // console.log('in subscribe added child', snapshot.val())
        dispatch(addChat(snapshot.val(), chatId))
      })

    firebase
      .database()
      .ref('chats')
      .child(chatId)
      .on('child_changed', (snapshot) => {
        // console.log('in subscribe changed child')
        dispatch(addChat(snapshot.val(), chatId))
      })
  }

export const deleteChatsDb = (chatId) => (dispatch) => {
    // console.log(chatId, id)
    firebase.database().ref('chats').child(chatId).remove(); 
    dispatch(deleteChat(chatId))
}