import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div>
        <div className = {s.pageCount} >
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selected : s.unSelected }
                    onClick={() => { props.onPageChange(p)}} >{p} </span>
            })}
        </div>

        {
            props.users.map(u => <main key={u.id}>
                <div>
                    {console.log(u.key)}
                    <NavLink to={'./Profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='NaN' className={s.photo} />
                    </NavLink>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => { props.unFollow(u.id)
                            }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => { props.follow(u.id)
                            }}>Follow</button>}
                </div>
                <div>
                    <section>
                        <h4>{u.name}</h4>
                        <p>{u.status}</p>
                    </section>
                    <section>
                        <h4>{/* {u.location.city} */}</h4>
                        <h4>{/* {u.location.country} */}</h4>
                    </section>
                </div>
            </main>)
        }
    </div >)
}

export default Users