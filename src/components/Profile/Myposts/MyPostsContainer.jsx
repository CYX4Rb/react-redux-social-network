import { connect } from 'react-redux'
import MyPosts from './MyPosts'
import {addPost} from '../../../Redux/Profile-reducer'

const mapStateToProps = (state) => {
  
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
    
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer