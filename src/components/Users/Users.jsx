import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

const Users = ({users, currentPage, totalUsersCount, pageSize, onPageChange, changeFollow, followingInProgress}) => {
    debugger
    return (<div>
        {
            users.map(u => <main key={u.id}>
                <div>
                    {console.log(u.key)}
                    <NavLink to={'./Profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='NaN' className={s.photo} />
                    </NavLink>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                changeFollow(u.id, false)
                            }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                changeFollow(u.id, true)
                            }}>Follow</button>}
                </div>
                <div>
                    <section>
                        <h4>{u.name}</h4>
                        <p>{u.status}</p>
                    </section>
                </div>
            </main>)
        }
        {/* <NavLink to={'/Users/' + currentPage} className = {s.NavLink} > */}
            <Paginator
                totalCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange} />
        {/* </NavLink> */}
    </div >)
}

export default Users