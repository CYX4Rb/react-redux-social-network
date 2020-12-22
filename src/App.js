import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializedApp } from './Redux/App-reducer'

import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/Navbar';

import Preloader from './components/common/Preloader/preloader';
import { withSuspense } from './components/HOC/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const Friends = React.lazy(() => import('./components/Friends/Friends'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/Music/Music'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))
const login = React.lazy(() => import('./components/Login/login'))




class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp()
  }

  render() {
    return !this.props.initialize
      ? <Preloader />
      : <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route
            path='/dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route
            path='/Friends'
            render={withSuspense(Friends)} />
          <Route
            path='/users/:page?'
            render={withSuspense(UsersContainer)} />
          <Route
            path='/news'
            render={withSuspense(News)} />
          <Route
            path='/music'
            render={withSuspense(Music)} />
          <Route
            path='/settings'
            render={withSuspense(Settings)} />
          <Route
            path='/login'
            render={withSuspense(login)} />
        </div>
      </div>
  }
}

let mapStateToProps = (state) => {
  return {
    initialize: state.app.initialize
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp }))(App);
