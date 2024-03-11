/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { useParams } from 'react-router-dom'

function withRouter(Children) {
  return function (props) {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}

export default withRouter
