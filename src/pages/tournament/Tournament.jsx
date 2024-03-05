import React from 'react'

import s from './Tournament.module.scss'

function Tournament() {
  return (
    <div className={s.Tournament}>
      Tournament
      <div className={s.whereBlock}>
        <h1>Где играем?</h1>
      </div>
      <div className={s.howBlock}>
        <h1>Как играем?</h1>
      </div>
      <div className={s.whoBlock}>
        <h1>С кем играем?</h1>
      </div>
    </div>
  )
}

export default Tournament
