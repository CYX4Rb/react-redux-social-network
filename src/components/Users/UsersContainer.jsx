import React from 'react'
import { connect } from 'react-redux'
import { changeFollow, toggleFollowingProgress, requestUsers, setCurrentPage } from '../../Redux/Users-reducer'

import Users from './Users'
import Preloader from '../common/Preloader/preloader'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users-selectors'
import { withRouter } from 'react-router-dom'



class UsersAPIComponent extends React.Component {
    constructor(props){
        super(props)
        const pageId = Number(props.match.params.page || props.currentPage)
        props.requestUsers(pageId, props.pageSize)
    }


    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }
    
    render() {
        return (<div key = {this.props.userId}> 
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                changeFollow={this.props.changeFollow}
                onPageChange={this.onPageChange}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {toggleFollowingProgress, requestUsers, changeFollow, setCurrentPage }),
    withRouter
)(UsersAPIComponent)

