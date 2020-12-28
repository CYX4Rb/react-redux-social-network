import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import profileReducer from './Profile-reducer'
import dialogReducer from './Dialog-reducer'
import sideBarReducer from './SideBar-reducer'
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./App-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


/* eslint-disable no-underscore-dangle */
let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
/* eslint-enable */
    window.store = store

export default store