import React, { useState } from 'react'

import s from './Counter.module.css'

import calIcon from '../../assets/icons/svg_pack/Black/Regular/Callback.svg'
import miniArrowIcon from '../../assets/icons/svg_pack/Black/Regular/CaretDown.svg'
import closeIcon from '../../assets/icons/svg_pack/Black/Regular/Close.svg'
import mapPointIcon from '../../assets/icons/svg_pack/Black/Regular/Tennis.svg'
import defaultAvatar from '../../assets/images/profile.png'

function Counter() {
  const [isChooseScreen, setIsChooseScreen] = useState(true)
  const handleCloseClick = () => {
    setIsChooseScreen(false)
  }
  const handleChooseClick = () => {
    setIsChooseScreen(true)
  }
  return (
    <div className={s.Counter}>
      <div className={s.whereMatch}>
        <div>
          <img src={calIcon} alt='cal_icon' />
          Сегодня
        </div>
        <div>
          <img src={mapPointIcon} alt='map_point' />
          Старый Хопер
        </div>
      </div>
      <div className={s.slider}>
        <div>1 партия</div>
        <div>3 партии</div>
        <div>5 партий</div>
        <div>7 партий</div>
        <div>21 партия</div>
      </div>
      <h2>Выберите соперника</h2>
      <div className={s.setup}>
        <div onClick={handleChooseClick}>
          Первый игрок
          <img src={miniArrowIcon} alt='mini_arrow' />
        </div>
        <div onClick={handleChooseClick}>
          Второй игрок
          <img src={miniArrowIcon} alt='mini_arrow' />
        </div>
      </div>
      {isChooseScreen && (
        <div className={s.choosePlayers}>
          <div className={s.choosePlayersHeader}>
            <h3>Выбрать соперника</h3>
            <img src={closeIcon} alt='crossIcon' onClick={handleCloseClick} />
          </div>

          <input type='text' />
          <h4>Последние соперники</h4>
          <div className={s.playersPlace}>
            <div className={s.avatar}>
              <img src={defaultAvatar} alt='avatar' />
              <div className={s.playerInfo}>
                <div>Василий Твердоухов</div>
                <div>рейтинг 358 (Балашов)</div>
              </div>
            </div>
          </div>
          <a href='/'>+ Добавить игрока</a>
        </div>
      )}
    </div>
  )
}

export default Counter
