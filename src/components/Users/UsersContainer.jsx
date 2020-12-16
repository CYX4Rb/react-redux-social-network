import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers } from '../../Redux/Users-reducer'

import Users from './Users'
import Preloader from '../common/preloader'
/* import { withAuthRedirect } from '../HOC/withAuthRedirect' */
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users-selectors'



class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
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
                unFollow={this.props.unFollow}
                follow={this.props.follow}
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
    /* withAuthRedirect, */
    connect(mapStateToProps,
        { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers })
)(UsersAPIComponent)

