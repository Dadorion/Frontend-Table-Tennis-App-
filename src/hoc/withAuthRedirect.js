/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

function mapStateToPropsForRedirect(state) {
  return { isAuth: state.auth.isAuth }
}

export default function withAuthRedirect(Component) {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login' />

      return <Component {...this.props} />
    }
  }
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}
