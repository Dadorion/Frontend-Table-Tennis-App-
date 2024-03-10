import React from 'react'

import s from './Tournament.module.scss'

import Header from '../../UI/header/header'

function Tournament() {
  return (
    <div className={s.Tournament}>
      <Header headName='Настройки турнира' />
      <div className={s.whereBlock}>
        <h3>Где играем?</h3>
      </div>
      <div className={s.howBlock}>
        <h3>Как играем?</h3>
      </div>
      <div className={s.whoBlock}>
        <h3>С кем играем?</h3>
      </div>
    </div>
  )
}

export default Tournament
