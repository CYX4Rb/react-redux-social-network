import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MaxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'
import Paginator from '../../common/Paginator/Paginator'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = React.memo((props) => {

  let addNewPost = (formData) => {
    props.addPost(formData.postText)
  }
  return (
    <div className={s.postsBlocked}>
      <h3>My posts</h3>
      <div>
        <AddNewPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {props.posts.map(m => <Post photo = {props.profile.photos.small} message={m.message} likesCount={m.likesCount} key = {m.id}/>)}
      </div>
      <Paginator totalCount = {props.posts.length} pageSize = {5} />
    </div>
  )
})
const maxlength10 = MaxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <Field
        component = {Textarea}
        name = 'postText'
        placeholder = {'enter your post text'}
        validate = {[required, maxlength10]} />
      <button type="submit">Add post</button>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: "newPost" })(AddNewPostForm)
export default MyPosts