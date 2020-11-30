import React from 'react'
import s from './ProfileInfo.module.css'
import ok from '../../../assets/ok.svg'
import no from '../../../assets/no.svg'
import Preloader from '../../common/preloader'
import userPhoto from '../../../assets/userPhoto.jpg'

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
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} />
                <div >{props.profile.aboutMe}</div>
                <img  className = {s.lookingForAJob} src = {props.profile.lookingForAJob ? ok : no} />
                <div >{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    )
}

export default ProfileInfo