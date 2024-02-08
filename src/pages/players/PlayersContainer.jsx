import React, { useEffect, useRef } from "react";
import Players from "./Players";
import { connect, useDispatch } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../redux/withRouter";
import { requestPlayersTC } from "../../redux/players-reducer";

function PlayersContainer(props) {
  const dispatch = useDispatch();
  const prevPlayersRef = useRef();
  const { players, pagination, sort } = props;

  
  

  useEffect(()=>{
    if ( players !== prevPlayersRef.current) {
      dispatch(requestPlayersTC(pagination.currentPage, pagination.pageSize, sort.mode, sort.direct));
  
      prevPlayersRef.current = players;
    }
    // eslint-disable-next-line
  },[dispatch, pagination.currentPage, pagination.pageSize, sort.mode, sort.direct])

  return (
    <>
      <Players {...props} />
    </>
  );
}

function mapStateToProps(state) {
  const {
    pageSize,
    totalPlayersCount,
    currentPage,
    isFetching,
    sortModeName,
    sortMode,
    sortDirection,
  } = state.playersReducer;
  return {
    findUserName: state.playersReducer.findUserName,
    filter: state.filterReducer,
    players: state.playersReducer.players,
    pagination: {
      pageSize,
      totalPlayersCount,
      pagesCount: Math.round(totalPlayersCount/pageSize),
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
  };
}
function mapDispatchToProps() {
  return {  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(PlayersContainer);
