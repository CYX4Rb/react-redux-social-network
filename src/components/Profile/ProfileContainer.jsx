import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.updateProfile(this.props.match.params.userId)
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.userId != this.props.match.params.userId) {
      this.updateProfile(nextProps.match.params.userId)
      return true
    }
    return true
  }

  updateProfile = (userId) => {
    if (!userId) { userId = this.props.userId}
    if(!userId){this.props.history.push('/login')}
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
      updateStatus={this.props.updateUserStatus} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId
})


export default compose(
  /* withAuthRedirect, */
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer)