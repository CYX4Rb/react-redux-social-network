const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    message: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are u' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'lets go' },
        { id: 6, message: 'Yoooo' }
    ],
    newTextMessage: '',
    dialog: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrei' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ],
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                newTextMessage: '',
                message: [...state.message, {id: 7, message: state.newTextMessage}]
            }
        case UPDATE_NEW_MESSAGE_TEXT: 
            return { 
                ...state,
                newTextMessage: action.newText
             }
        default:
            return state
    }
}

export const updateNewMessageCreator = (element) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: element })
export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export default dialogReducer