import React from 'react'
import SpinnerLoading from '../../../assets/SpinnerLoading.svg'
import s from './preloader.module.css'

const Preloader = (props) => {
    return <div className={s.preloader} >
        <img src={SpinnerLoading} />
    </div>
}

export default Preloader