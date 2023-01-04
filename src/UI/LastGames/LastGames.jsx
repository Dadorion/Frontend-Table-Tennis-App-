import React from 'react';
import GameCard from '../GameCard/GameCard';
import s from './LastGames.module.css';

function LastGames(props) {

  let printGames = props.games.map(game => {
    let gFpScore = game.firstPlayer.score;
    let gSpScore = game.secondPlayer.score;
    let firstScores = gFpScore.map(score => <div>{score}</div>)
    let secondScores = () => {
      gSpScore instanceof Array
        ? gSpScore.map(score => <div>{score}</div>)
        : <div>{gSpScore}</div>
    }


    return (
      <GameCard
        fpName={game.firstPlayer.name}
        spName={game.secondPlayer.name}
        fpScore={firstScores}
        spScore={secondScores()}
        spWin={game.secondPlayer.isWinner}
        fpWin={game.firstPlayer.isWinner}
        date={game.date}
      />
    )
  })


  return (
    <div className={`${s.LastGames}`}>
      {printGames}
    </div>
  )
}
export default LastGames;
