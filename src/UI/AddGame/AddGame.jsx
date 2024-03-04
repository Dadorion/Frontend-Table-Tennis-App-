import React from 'react'

import s from './AddGame.module.css'

function AddGame(props) {
  function onFirstNameChange(e) {
    let body = e.target.value
    props.firstNameChange(body)
  }
  function onSecondNameChange(e) {
    let body = e.target.value
    props.secondNameChange(body)
  }
  function onFirstScoreChange(e) {
    let body = e.target.value
    props.firstScoreChange(body)
  }
  function onSecondScoreChange(e) {
    let body = e.target.value
    props.secondScoreChange(body)
  }
  function onAddGame(e) {
    let body = e.target.value
    props.addGame(body)
  }
  function onAddPart(e) {
    alert('Функционал не прописан')
  }

  return (
    <div className={`${s.AddGame}`}>
      <div className={`${s.names}`}>
        <input
          type='text'
          placeholder='имя певого игрока'
          value={props.state.newFirstName}
          onChange={onFirstNameChange}
        />
        <input
          type='text'
          placeholder='имя второго игрока'
          value={props.state.newSecondName}
          onChange={onSecondNameChange}
        />
      </div>
      <div className={`${s.part}`}>1 партия</div>
      <div className={`${s.score}`}>
        <input type='text' placeholder='счет первого' value={props.state.newFirstScore} onChange={onFirstScoreChange} />
        <input
          type='text'
          placeholder='счет второго'
          value={props.state.newSecondScore}
          onChange={onSecondScoreChange}
        />
      </div>
      <div className={`${s.btn}`}>
        <button onClick={onAddGame}>Записать игру</button>
        <button onClick={onAddPart}>Добавить партию</button>
      </div>
    </div>
  )
}
export default AddGame
