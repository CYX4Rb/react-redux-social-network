import profileReducer, { addPost } from "./Profile-reducer"

let initialState = {
    posts: [
        { id: 1, message: 'hi, how are you?', likesCount: 15 },
        { id: 2, message: "it's my first post", likesCount: 23 },
    ],
    profile: NaN,
    status: ''
}


it('should be incremented', () => {
    let action = addPost('s')
    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})