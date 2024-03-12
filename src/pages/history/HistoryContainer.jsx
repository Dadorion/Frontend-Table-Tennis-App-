import React from 'react'
import { connect, useDispatch } from 'react-redux'

import History from './History'

import { requestUsers } from '../../redux/users-reducer'

function HistoryContainer({users}) {
  const dispatch = useDispatch()

  if (!users) {
    dispatch(requestUsers(1, 10))
  }

  return <History users />
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users,
  }
}
function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
