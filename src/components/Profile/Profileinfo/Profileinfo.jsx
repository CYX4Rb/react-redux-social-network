import React from 'react'
import s from './ProfileInfo.module.css'
import ok from '../../../assets/ok.svg'
import no from '../../../assets/no.svg'
import Preloader from '../../common/preloader'
import userPhoto from '../../../assets/userPhoto.jpg'
import StatusProfile from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.backgr} src={'https://www.sunhome.ru/i/wallpapers/139/sinii-fon.orig.jpg'} alt='ни че не нашел(' />
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.profile.fullName}</h3>
                <StatusProfile status =  {props.status} updateStatus = {props.updateStatus} userId = {props.userId}/>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} />
                <p >{props.profile.aboutMe}</p>
                <img  className = {s.lookingForAJob} src = {props.profile.lookingForAJob ? ok : no} />
                <p >{props.profile.lookingForAJobDescription}</p>

            </div>
        </div>
    )
}

export default ProfileInfo