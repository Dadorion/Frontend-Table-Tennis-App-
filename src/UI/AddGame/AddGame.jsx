import React from 'react';
import s from './AddGame.module.css';

function AddGame(props) {
  return (
    <div className={`${s.AddGame}`}>

      <div className={`${s.names}`}>
        <input
          type="text"
          placeholder='имя певого игрока'
          value={props.state.newFirstName}
          onChange={props.onFirstNameChange} />
        <input
          type="text"
          placeholder='имя второго игрока'
          value={props.state.newSecondName}
          onChange={props.onSecondNameChange} />
      </div>
      <div className={`${s.part}`}>1 партия</div>
      <div className={`${s.score}`}>
        <input
          type="text"
          placeholder='счет первого'
          value={props.state.newFirstScore}
          onChange={props.onFirstScoreChange} />
        <input
          type="text"
          placeholder='счет второго'
          value={props.state.newSecondScore}
          onChange={props.onSecondScoreChange} />
      </div>
      <div className={`${s.btn}`}>
        <button onClick={props.onAddClick}>Записать игру</button>
      </div>

    </div>

  )
}
export default AddGame;
