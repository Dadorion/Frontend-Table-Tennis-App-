import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../redux/withRouter";

function UsersContainer(props) {
  return (
    <>
      <Users {...props}/>
    </>
  );
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
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
