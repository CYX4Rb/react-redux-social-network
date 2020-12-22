import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import ok from '../../../assets/ok.svg'
import no from '../../../assets/no.svg'
import Preloader from '../../common/Preloader/preloader'
import userPhoto from '../../../assets/userPhoto.jpg'
import StatusProfileWithHook from './ProfileStatusWithHook'


const ProfileInfo = ({ profile, savePhoto, updateStatus, status, isOwner }) => {
    if (!profile) {
        return <Preloader />
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }     
    }

    return (
        <div>
            {/* <div>
                <img className={s.backgr} src={'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'} alt='ни че не нашел(' />
            </div> */}
            <div className={s.descriptionBlock}>
                <h3>{profile.fullName}</h3>
                <StatusProfileWithHook status={status} updateStatus={updateStatus} userProfileId={profile.userId} isOwner={isOwner} />
                <img
                    src={
                        profile.photos.large !== null
                            ? profile.photos.large
                            : userPhoto
                    }
                />
                {isOwner &&
                    <div>
                        <input onChange={onMainPhotoSelected} type={'file'} />
                    </div>}
                <p >{profile.aboutMe}</p>
                <img className={s.lookingForAJob} src={profile.lookingForAJob ? ok : no} />
                <p >{profile.lookingForAJobDescription}</p>

            </div>
        </div>
    )
}

export default ProfileInfo