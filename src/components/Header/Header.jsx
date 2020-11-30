import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
        
    return <header className={s.header}>
            <img src='https://1.bp.blogspot.com/-4QIBI-XmW4I/WdtCeBUDv1I/AAAAAAAAA3Y/sFI5RQUjNxQ5QD0XR1fwkpyq5BIPD6QZACLcBGAs/s1600/Free%2BLetter%2BC%2BLogo%2BDesign.png' alt=''/>
<div className={s.loginBlock}>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
        </header>
}

export default Header