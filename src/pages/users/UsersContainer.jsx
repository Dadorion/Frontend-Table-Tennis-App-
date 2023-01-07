import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (id) => {
      dispatch(followAC(id))
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
