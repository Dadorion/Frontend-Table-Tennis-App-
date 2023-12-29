import React from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import HomePage from "./Home_page";

function HomePageContainer(props) {
   const auth = useSelector((state) => state.auth);
   return <HomePage user={auth} />;
}

function mapStateToProps(state) {
   return {
      isAuth: state.auth.isAuth,
   };
}

export default compose(
   connect(mapStateToProps, {}),
   withAuthRedirect
)(HomePageContainer);
