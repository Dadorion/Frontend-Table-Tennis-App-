import React from 'react';
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import PreloaderBall from '../../UI/preloader/PreloaderBall';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageNumber, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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


function mapStateToProps(state) {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress,
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
      getUsers,
      follow,
      unfollow
    }),
  withAuthRedirect
)(UsersContainer);
