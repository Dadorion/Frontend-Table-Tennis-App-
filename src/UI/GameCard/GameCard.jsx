import React from 'react';
import s from './GameCard.module.css';

function GameCard(props) {


  return (
    <div className={`${s.GameCard}`}>
      <div className={`${s.fpName}`}>
        {props.fpName}
      </div>
      <div className={`${s.spName}`}>
        {props.spName}
      </div>
      <div className={`${s.fpScore}`}>
        {props.fpScore}
      </div>
      <div className={`${s.spScore}`}>
        {props.spScore}
      </div>
      <div className={`${s.date}`}>
        {props.date}
      </div>


    </div>
  )
}
export default GameCard;
