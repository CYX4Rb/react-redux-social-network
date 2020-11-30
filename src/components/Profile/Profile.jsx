import React from 'react'
import Preloader from '../common/preloader'
import MyPostsContainer from './Myposts/MyPostsContainer'
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return <div >
    <ProfileInfo profile = {props.profile} />
    <MyPostsContainer />
  </div>
}

export default Profile