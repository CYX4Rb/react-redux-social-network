import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 12707 }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status = {this.props.status}
    updateStatus = {this.props.updateUserStatus} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})


  export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
  )(ProfileContainer)