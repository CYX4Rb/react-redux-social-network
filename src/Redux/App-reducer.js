import { getAuthUserData } from "./Auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialize: true
            }
        default:
            return state
    }
}

export const setInitialized = () => ({ type: SET_INITIALIZED})

export const initializedApp = () => dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
    .then(() => dispatch(setInitialized()))
}

export default appReducer