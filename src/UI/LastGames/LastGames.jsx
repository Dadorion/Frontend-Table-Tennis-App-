import React from 'react';
import GameCard from '../GameCard/GameCard';
import GameCardMatch from '../GameCard/GameCardMatch';
import s from './LastGames.module.css';

const LastGames = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  let printGames = props.games.map(game => {

    let gFpScore = game.firstPlayer.score;
    let gSpScore = game.secondPlayer.score;
    let firstScores = gFpScore.map((score, index) => <div key={index}>{score}</div>)
    let secondScores = gSpScore.map((score, index) => <div key={index}>{score}</div>)
    if (gFpScore.length > 1) {
      return (
        <GameCard
          key={game.id}
          fpWinner={game.firstPlayer.isWinner}
          spWinner={game.secondPlayer.isWinner}
          fpName={game.firstPlayer.name}
          spName={game.secondPlayer.name}
          fpScore={firstScores}
          spScore={secondScores}
          spWin={game.secondPlayer.isWinner}
          fpWin={game.firstPlayer.isWinner}
          date={game.date}
        />
      )
    } else {
      return (
        <GameCardMatch
          fpWinner={game.firstPlayer.isWinner}
          spWinner={game.secondPlayer.isWinner}
          fpName={game.firstPlayer.name}
          spName={game.secondPlayer.name}
          fpScore={firstScores}
          spScore={secondScores}
          spWin={game.secondPlayer.isWinner}
          fpWin={game.firstPlayer.isWinner}
          date={game.date}
          key={game.id}
        />
      )
    }

  })


  return (
    <div className={`${s.LastGames}`}>
      {printGames}
    </div>
  )

})
export default LastGames;
