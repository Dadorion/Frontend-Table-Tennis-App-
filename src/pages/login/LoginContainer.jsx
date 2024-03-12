import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

import { getProfile } from '../../redux/profile-reducer'
import  withRouter  from '../../redux/withRouter'

function LoginContainer() {
  return <Login />
}

function mapStateToProps() {
  return {}
}
function mapDispatchToProps() {
  return {
    getProfile,
  }
}

const WithUrlDataContainerComponent = withRouter(LoginContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)
