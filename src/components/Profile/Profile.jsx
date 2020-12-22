import React from 'react'
import Preloader from '../common/Preloader/preloader'
import MyPostsContainer from './Myposts/MyPostsContainer'
import ProfileInfo from './Profileinfo/Profileinfo'
import s from './Profile.module.css'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return <div className = {s.profile} >
    <ProfileInfo {...props} />
    <MyPostsContainer profile={props.profile} />
  </div>
}

export default Profile