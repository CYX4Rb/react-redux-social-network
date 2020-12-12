import React from 'react'
import { NavLink } from 'react-router-dom'
import SideBarContainer from './SideBar/SideBarContainer'
import s from './Navigation.module.css'
import { connect } from 'react-redux'

const NavBar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to="/profile" activeClassName={s.active}> My Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Friends' activeClassName={s.active}>Friends</NavLink>
      </div>
      <div><SideBarContainer /></div>
      <div className={s.item}>
        <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default NavBar