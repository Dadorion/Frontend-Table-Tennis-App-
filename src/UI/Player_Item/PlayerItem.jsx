import React, { useState } from 'react'

import s from './PlayerItem.module.css'

import dotsIcon from '../../assets/icons/svg_pack/Black/Light/DotsThreeOutline_light.svg'
import editIcon from '../../assets/icons/svg_pack/Black/Light/Edit.svg'
import PopupEditPlayer from '../PopupEditPlayer/PopupEditPlayer'

function PlayerItem({count, name, surname}) {
  // const [showExtra, setShowExtra] = useState(false);
  const [editButton, setEditButton] = useState(false)
  const [showEditPlayer, setShowEditPlayer] = useState(false)

  const handleDots = () => {
    setEditButton(!editButton)
  }
  const handleEditBtn = () => {
    setEditButton(!editButton)
    setShowEditPlayer(!showEditPlayer)
  }

  const winsCount = count ? `победных очков: ${count}` : 'победных очков: 0'

  // const avatar = props.photoPath
  //   ? `http://localhost:5000/${props.photoPath}`
  //   : user_pic;

  return (
    <div className={s.Item}>
      <div className={s.mainInfo}>
        <div className={s.miniCard}>
          <div className={s.userInfo}>
            {/* <img id={s.avatar} src={avatar} alt="avatar" /> */}
            <div className={s.userDetail}>
              <div>{`${name} ${surname}`}</div>
              <div className={s.subtitle}>{winsCount}</div>
            </div>
          </div>
          <div className={s.tapContainer} onClick={handleDots}>
            <img src={dotsIcon} alt='dotsIcon' />
            {editButton && (
              <div className={s.editPlayerBtn} onClick={handleEditBtn}>
                <img src={editIcon} alt='editIcon' />
                <p>Редактировать</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* {showExtra && <ExtraInfo />} */}
      {showEditPlayer && <PopupEditPlayer exit={setShowEditPlayer} />}
    </div>
  )
}

export default PlayerItem
