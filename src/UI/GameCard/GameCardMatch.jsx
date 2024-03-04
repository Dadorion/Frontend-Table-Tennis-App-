import React from 'react'

import s from './GameCardMatch.module.css'

function GameCardMatch(props) {
  return (
    <div className={`${s.GameCardMatch}`}>
      {props.fpName === 'Anton' ? (
        <div className={`${s.fpName}`}>Me</div>
      ) : (
        <div className={`${s.fpName}`}>{props.fpName}</div>
      )}
      {props.spName === 'Anton' ? (
        <div className={`${s.spName}`}>Me</div>
      ) : (
        <div className={`${s.spName}`}>{props.spName}</div>
      )}
      {/* {
        props.fpWinner ? `${s.fpScoreW}` : `${s.fpScore}`
      } */}
      <div className={`${s.fpScore}`}>{props.fpScore}</div>
      <div className={`${s.spScore}`}>{props.spScore}</div>
      <div className={`${s.date}`}>{props.date}</div>
    </div>
  )
}
export default GameCardMatch
