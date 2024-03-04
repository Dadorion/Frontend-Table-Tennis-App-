import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

import { getProfile } from '../../redux/profile-reducer'
import { withRouter } from '../../redux/withRouter'

function LoginContainer(props) {
  return (
    <>
      <Login />
    </>
  )
}

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(state) {
  return {
    getProfile,
  }
}

let WithUrlDataContainerComponent = withRouter(LoginContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)
