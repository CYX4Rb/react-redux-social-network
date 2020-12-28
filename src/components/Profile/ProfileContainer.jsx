import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../Redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount = () => {
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
    if (!userId) { userId = this.props.userId }
    if (!userId) { this.props.history.push('/login') }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateUserStatus}
      savePhoto={this.props.savePhoto}
      userId={this.props.userId}
      isOwner={this.props.userId == this.props.profile.userId} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId

})


export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
  withRouter
)(ProfileContainer)