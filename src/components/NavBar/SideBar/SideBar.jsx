import React from 'react'
import BestFriend from './BestFriend'
import s from './SideBar.module.css'

const SideBar = (props) => {
    return (
        <div className={s.bestFriends}>
            {props.sideBar.map(b => <BestFriend page={b.page} name={b.name} key = {b.id}/>)}
        </div>
    )
}

export default SideBar