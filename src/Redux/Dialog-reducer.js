const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    message: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are u' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'lets go' },
        { id: 6, message: 'Yoooo' }
    ],
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
                message: [...state.message, {id: 7, message: action.newMessage}]
            }
        default:
            return state
    }
}


export const addMessageCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage })

export default dialogReducer