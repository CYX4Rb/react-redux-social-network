import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import NavBar from './components/NavBar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import login from './components/Login/login';
import { compose } from 'redux';
import { initializedApp } from './Redux/App-reducer'
import Preloader from './components/common/preloader';

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
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/Friends' component={Friends} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={login} />
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
