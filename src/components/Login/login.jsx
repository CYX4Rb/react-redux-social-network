import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControl'
import { login, logOut } from '../../Redux/Auth-reducer'

import s from './login.module.css'
import { Redirect } from 'react-router-dom'

const loginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                name={'email'} component={Input} placeholder={'Login'} validate={[required]}
            ></Field></div>
            <div><Field
                name={'password'} type={'password'} component={Input} placeholder={'Password'} validate={[required]}
            ></Field></div>
            <div><Field
                name={'rememberMe'} component={Input} type={'checkbox'}
            ></Field></div>
            {props.error && <div className = {s.formSummaryError} >{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(loginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        
    }
    if (props.isAuth) { return <Redirect to={'/profile'} /> }

return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login, logOut })(Login)