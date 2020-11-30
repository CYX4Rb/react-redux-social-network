import React from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return !this.props.isAuth ? <Redirect to='/login' /> : <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}