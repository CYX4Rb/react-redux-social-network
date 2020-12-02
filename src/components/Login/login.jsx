import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './login.module.css'

const loginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name = {'login'} component = {'input'} placeholder = {'Login'} ></Field></div>
            <div><Field name = {'pass'} component = {'input'} placeholder = {'Password'} ></Field></div>
            <div><Field name = {'rememberMe'} component = {'input'} type = {'checkbox'} ></Field></div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(loginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    )
}

export default Login