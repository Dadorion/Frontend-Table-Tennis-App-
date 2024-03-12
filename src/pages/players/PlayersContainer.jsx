/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { compose } from 'redux'

import Players from './Players'

import  withAuthRedirect  from '../../hoc/withAuthRedirect'
import { requestPlayersTC } from '../../redux/players-reducer'
import  withRouter  from '../../redux/withRouter'

function PlayersContainer(props) {
  const dispatch = useDispatch()
  const prevPlayersRef = useRef()
  const { players, pagination, sort } = props


  useEffect(() => {
    if (players !== prevPlayersRef.current) {
      dispatch(requestPlayersTC(pagination.currentPage, pagination.pageSize, sort.mode, sort.direct))

      prevPlayersRef.current = players
    }
    // eslint-disable-next-line
  },[dispatch, pagination.currentPage, pagination.pageSize, sort.mode, sort.direct])

  return <Players {...props} />
}

function mapStateToProps(state) {
  const { pageSize, totalPlayersCount, currentPage, isFetching, sortModeName, sortMode, sortDirection, findUserName, players } =
    state.playersReducer
  return {
    players,
    findUserName,
    filter: state.filterReducer,
    pagination: {
      pageSize,
      totalPlayersCount,
      pagesCount: Math.round(totalPlayersCount / pageSize),
      currentPage,
      isFetching,
    },
    sort: {
      sortModeName,
      mode: sortMode,
      direct: sortDirection,
    },
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}
function mapDispatchToProps() {
  return {}
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(PlayersContainer)
