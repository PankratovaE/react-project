import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE"
export const CLEAN_CHAT = "MESSAGES::CLEAN_CHAT"



export const addMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        chatId
    }
})
export const cleanChat = (chatId) => ({
    type: CLEAN_CHAT,
    payload: {
        chatId
    }
})
export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id
    }
})

// export const addMessageWithThunk = (message, id) => (dispatch, getState) => {

//     dispatch(addMessage(message.author, message.text, id))

//     if (message.author !== 'Robot') {
//       setTimeout(() => {
//       dispatch(addMessage('Robot', 'Good message!', +id))

//     }, 1500);
//     }
// }

export const addMessagesDb = (chatId, message) => {
    // console.log('in add message db in actions')
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)


        let timer = setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: uuidv4(),
                    author: "Robot",
                    text: 'Good message!',
                })

            clearTimeout(timer)
        }, 1500)
    }
}

export const subscribeOnMessageChanging = (chatId) => (dispatch, getState) => {
    firebase
      .database()
      .ref('messages')
      .child(chatId)
      .on('child_added', (snapshot) => {
        // console.log('in subscribe added child', snapshot.val())
        dispatch(addMessage(snapshot.val(), chatId))
      })

    firebase
      .database()
      .ref('messages')
      .child(chatId)
      .on('child_changed', (snapshot) => {
        // console.log('in subscribe changed child')
        dispatch(addMessage(snapshot.val(), chatId))
      })
  }

export const deleteMessageDb = (chatId, id) => (dispatch) => {
    // console.log(chatId, id)
    firebase.database().ref('messages').child(chatId).child(id).remove(); //не работает, не могу узнать .child(id), который
                                                                          //генерируется firebase
    dispatch(deleteMessage(chatId, id))
}