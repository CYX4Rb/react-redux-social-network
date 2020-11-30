import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/Profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


  export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile }),
    withRouter
  )(ProfileContainer)