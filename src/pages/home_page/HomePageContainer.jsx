import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Navigate } from 'react-router-dom';

function HomePage(props) {

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (<HomePage />)
}


function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {}),
  withAuthRedirect
)(HomePage);