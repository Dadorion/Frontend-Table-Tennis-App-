import React from "react";
import Users from "./Users";
import { connect, useDispatch } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../redux/withRouter";
import { requestUsers } from "../../redux/users-reducer";

function UsersContainer(props) {
  const dispatch = useDispatch();

  if (!props.users) {
    dispatch(requestUsers(1,10));
  }

  return (
    <>
      <Users {...props} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users,
    findUserName: state.usersReducer.findUserName,
    // authorizedUserId: state.auth.userId,
    // isAuth: state.auth.isAuth,
  };
}
function mapDispatchToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(UsersContainer);
