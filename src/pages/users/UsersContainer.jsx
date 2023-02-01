import React from 'react';
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import PreloaderBall from '../../UI/preloader/PreloaderBall';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';




class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.pageNumber, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <PreloaderBall /> : null}
      <Users
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        isAuth={this.props.isAuth}
      />
    </>
  }
}


// function mapStateToProps(state) {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     totalUsersCount: state.usersReducer.totalUsersCount,
//     currentPage: state.usersReducer.currentPage,
//     isFetching: state.usersReducer.isFetching,
//     followingInProgress: state.usersReducer.followingInProgress,
//   }
// }

function mapStateToProps(state) {
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
  connect(
    mapStateToProps,
    {
      followSuccess,
      unfollowSuccess,
      setCurrentPage,
      toggleFollowingProgress,
      requestUsers,
      follow,
      unfollow
    }),
  // защитить страницу пользователей -> withAuthRedirect
  // withAuthRedirect
)(UsersContainer);
