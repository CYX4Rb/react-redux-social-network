import { connect } from 'react-redux'
import { updateNewPostActionCreator, addPostActionCreator } from '../../../Redux/Profile-reducer'
import MyPosts from './MyPosts'
import {updateNewPostText, addPost} from '../../../Redux/Profile-reducer'

const mapStateToProps = (state) => {
  
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsContainer