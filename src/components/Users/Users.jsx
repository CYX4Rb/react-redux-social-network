import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

const Users = (props) => {
    return (<div>
        {
            props.users.map(u => <main key={u.id}>
                <div>
                    {console.log(u.key)}
                    <NavLink to={'./Profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='NaN' className={s.photo} />
                    </NavLink>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.changeFollow(u.id, false)
                            }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.changeFollow(u.id, true)
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
        <NavLink to={'/users/' + props.currentPage}>
            <Paginator
                totalCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange} />
        </NavLink>
    </div >)
}

export default Users