import { profileAPI } from "../API/api"

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO'

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 15 },
        { id: 2, message: "it's my first post", likesCount: 23 },
    ],
    profile: NaN,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 3, message: action.postText, likesCount: 0 }],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = (postText) => ({ type: ADD_POST, postText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export const getUserProfile = userId => async dispatch => {
    let response = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(response.data))
}


export const getUserStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const savePhoto = photo => async dispatch => {
    
    let response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(setUserPhoto(response.data.data.photos))
    }
}

export const updateUserStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}



export default profileReducer