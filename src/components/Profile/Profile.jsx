import React from 'react'
import Preloader from '../common/preloader'
import MyPostsContainer from './Myposts/MyPostsContainer'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
  
  if(!props.profile){
    return <Preloader />
  }

  return <div >
    <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} userId = {props.match.params.userId} />
    <MyPostsContainer />
  </div>
}

export default Profile