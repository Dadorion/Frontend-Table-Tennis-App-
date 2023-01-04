import React from 'react';
import s from './LastGames.module.css';
import LastGames from './LastGames';

function LastGamesContainer(props) {

  let games = props.store.getState().gameReducer.games;



  return (
    <div className={`${s.LastGamesContainer}`}>
      <LastGames games={games} />
    </div>
  )
}
export default LastGamesContainer;
