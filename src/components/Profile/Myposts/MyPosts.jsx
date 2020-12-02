import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

  let addNewPost = (formData) => {
    props.addPost(formData.postText)
  }
    return (
    <div className={s.postsBlocked}>
      <h3>My posts</h3>
      <div>
        <AddNewPostReduxForm onSubmit = {addNewPost}/>
      </div>
      <div className={s.posts}>
        {props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
          <Field component = 'textarea' name = 'postText' placeholder = 'enter your post text' />
          <button>Add post</button>
        </form>
  )
}

const AddNewPostReduxForm = reduxForm({form: "newPost"})(AddNewPostForm)
export default MyPosts