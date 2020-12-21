import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'

const StatusProfileWithHook = React.memo((props) => {


    let [editMode, changeEditMode] = useState(false)
    let [userStatus, setStatus] = useState(props.state)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    let activateEditMode = () => {
        changeEditMode(true)
    }

    let deActivateEditMode = () => {
        props.updateStatus(userStatus)
        changeEditMode(false)
    }

    let onStatusOnChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode && !props.userId
                ? <div>
                    <input onChange={onStatusOnChange} autoFocus={true} onBlur={deActivateEditMode} value={userStatus} />
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode} className={s.userStatus} >{props.status || '-------'}</span>
                </div>

            }
        </div>
    )
})
export default StatusProfileWithHook