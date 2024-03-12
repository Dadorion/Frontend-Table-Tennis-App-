import React from 'react'
import { connect, useSelector } from 'react-redux'
import { compose } from 'redux'

import HomePage from './Home_page'

import  withAuthRedirect  from '../../hoc/withAuthRedirect'

function HomePageContainer() {
  const auth = useSelector((state) => state.auth)
  return <HomePage user={auth} />
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(HomePageContainer)
