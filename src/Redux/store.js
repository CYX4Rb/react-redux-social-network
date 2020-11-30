/* import dialogReducer from "./Dialog-reducer"
import profileReducer from "./Profile-reducer"
import sideBarReducer from "./SideBar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi, how are you?', likesCount: 15 },
                { id: 2, message: "it's my first post", likesCount: 23 },
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },

        sideBar: [
            { page: "https://prikolnye-kartinki.ru/img/picture/Jun/18/846edd45aefede9284effa2fa0ee2cc1/8.jpg", name: 'Andrew' },
            { page: 'https://www.fukui-daikyo.org/wp-content/themes/songaihoken/src/img/contents/work/img.jpg', name: 'Sasha' },
            { page: "https://th.bing.com/th/id/OIP.1dvt03G9wswcASBLHu81UQAAAA?pid=Api&w=320&h=320&rs=1", name: 'Sveta' }
        ]
    },

    _callSubscriber() {
    },

    getState() {
        return this._state
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)

    }
}

export default store

window.store = store */