import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {
  let newPostElement = React.createRef()

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  } 

  let addPost = () => {
    props.addPost();
  }
    return (
    <div className={s.postsBlocked}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref ={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)}
      </div>
    </div>
  )
}

export default MyPosts