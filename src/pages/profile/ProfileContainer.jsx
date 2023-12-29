import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../redux/withRouter";

function ProfileContainer(props) {
  return (
    <>
      <Profile {...props} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    profile: state.profileReducer.profile,
    newProfileData: state.profileReducer.newProfileData,
  };
}
export default compose(
  connect(mapStateToProps, {}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
