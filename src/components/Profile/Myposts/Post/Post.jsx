import React from 'react'
import s from './Post.module.css'
import userPhoto from '../../../../assets/userPhoto.jpg'

const Post = (props) => {
  return (
        <div className={s.item}>
          <img className={s.ava} src= {props.photo ? props.photo : userPhoto} alt='' />
          {props.message}
          <div>
            <span>like</span>{props.likesCount}
          </div>
        </div>
  )
}

export default Post