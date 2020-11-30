import React from 'react'
import s from './SideBar.module.css'

const BestFriend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.page} alt='NaN' />
            <a>{props.name}</a>
        </div>
    )
}

export default BestFriend