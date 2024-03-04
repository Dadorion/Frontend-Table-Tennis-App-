import React from 'react'

// import GameCard from '../GameCard/GameCard';
// import GameCardMatch from '../GameCard/GameCardMatch';
import s from './LastGames.module.css'

import pro_face from '../../icons/profile.png'

function LastGame(props) {
  return (
    <div className={s.wrapperBlock}>
      <h2 className={s.title}>Последняя игра</h2>
      <div className={s.wrapper}>
        <p className={s.date}>{props.date != null ? props.date : '02.02.2022'}</p>
        <div className={s.info}>
          <div className={s.player}>
            <img className={s.avatarLk} src={props.avatar != null ? props.avatar : pro_face} alt='Avatar' />
            <p className={s.playerName}>{props.playerName != null ? props.playerName : 'Игрок1'}</p>
          </div>
          <div>
            <p>{props.score != null ? props.score : '0 : 0'}</p>
          </div>
          <div className={s.player}>
            <img className={s.avatarLk} src={props.avatar != null ? props.avatar : pro_face} alt='Avatar' />
            <p className={s.playerName}>{props.playerName != null ? props.playerName : 'Игрок2'}</p>
          </div>
        </div>
        <a className={s.link} href='/'>
          добавить ещё &#8594;
        </a>
      </div>
    </div>
  )
}

// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps !== this.props || nextState !== this.state;
// }

// let printGames = props.games.map(game => {

//   let gFpScore = game.firstPlayer.score;
//   let gSpScore = game.secondPlayer.score;
//   let firstScores = gFpScore.map((score, index) => <div key={index}>{score}</div>)
//   let secondScores = gSpScore.map((score, index) => <div key={index}>{score}</div>)
//   if (gFpScore.length > 1) {
//     return (
//       <GameCard
//         key={game.id}
//         fpWinner={game.firstPlayer.isWinner}
//         spWinner={game.secondPlayer.isWinner}
//         fpName={game.firstPlayer.name}
//         spName={game.secondPlayer.name}
//         fpScore={firstScores}
//         spScore={secondScores}
//         spWin={game.secondPlayer.isWinner}
//         fpWin={game.firstPlayer.isWinner}
//         date={game.date}
//       />
//     )
//   } else {
//     return (
//       <GameCardMatch
//         fpWinner={game.firstPlayer.isWinner}
//         spWinner={game.secondPlayer.isWinner}
//         fpName={game.firstPlayer.name}
//         spName={game.secondPlayer.name}
//         fpScore={firstScores}
//         spScore={secondScores}
//         spWin={game.secondPlayer.isWinner}
//         fpWin={game.firstPlayer.isWinner}
//         date={game.date}
//         key={game.id}
//       />
//     )
//   }

// })

// return (
//   <div className={`${s.LastGames}`}>
//     {printGames}
//   </div>
// )

export default LastGame
