import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from './Profile-reducer'
import dialogReducer from './Dialog-reducer'
import sideBarReducer from './SideBar-reducer'
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store