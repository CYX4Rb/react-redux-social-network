import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
        <div className={s.item}>
          <img className={s.ava} src='https://memasi.club/wp-content/uploads/2019/05/13-47.jpg' alt='' />
          {props.message}
          <div>
            <span>like</span>{props.likesCount}
          </div>
        </div>
  )
}

export default Post