import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers } from '../../Redux/Users-reducer'

import Users from './Users'
import Preloader from '../common/preloader'
import { withAuthRedirect } from '../HOC/withAuthRedirect'
import { compose } from 'redux'



class UsersAPIComponent extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
       /*  this.props.setCurrentPage(pageNumber) */ 
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        /* userId: */ 
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers })
)(UsersAPIComponent)

