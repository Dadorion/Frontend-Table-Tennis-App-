import React from 'react'

import s from './PlayerItem.module.css'

function ExtraInfo() {
  return (
    <div className={`${s.ExtraInfo}`}>
      <div className={`${s.info}`}>
        <span>последняя игра: 11.11.2023</span>
        <span>встреч проведено: 21</span>
        <span>моих побед: 11 (52%)</span>
      </div>
      <button type='button' className={`${s.button}`}>Показать встречи</button>
    </div>
  )
}
export default ExtraInfo
