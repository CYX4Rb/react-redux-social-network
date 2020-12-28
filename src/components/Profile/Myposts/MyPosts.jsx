import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MaxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'
import Paginator from '../../common/Paginator/Paginator'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = React.memo(({profile, addPost, posts}) => {

  let addNewPost = (formData) => {
    addPost(formData.postText)
  }
  return (
    <div className={s.postsBlocked}>
      <h3>My posts</h3>
      <div>
        <AddNewPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {posts.map(m => <Post photo = {profile.photos.small} message={m.message} likesCount={m.likesCount} key = {m.id}/>)}
      </div>
      <Paginator totalCount = {posts.length} pageSize = {5} />
    </div>
  )
})
const maxlength10 = MaxLengthCreator(10)

const AddNewPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit = {handleSubmit}>
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