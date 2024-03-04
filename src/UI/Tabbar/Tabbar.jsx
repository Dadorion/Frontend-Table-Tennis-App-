import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import s from './Tabbar.module.css'

import profileIcon from '../../assets/icons/svg_pack/Black/Light/User_light.svg'
import plusIcon from '../../assets/icons/svg_pack/Black/Regular/AddCircle.svg'
import homeIcon from '../../assets/icons/svg_pack/Black/Regular/House.svg'

function Tabbar(props) {
  const location = useLocation()
  const currentPath = location.pathname
  const [showTabbar, setShowTabbar] = useState(true)

  const blockArr = ['/edit-my-profile', '/edit-photo']
  useEffect(() => {
    setShowTabbar(!blockArr.includes(currentPath))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath])

  return (
    <>
      {showTabbar && (
        <div className={s.Tabbar}>
          <div className={currentPath === '/' ? s.active : s.disactive}>
            <Link to='/'>
              <img src={homeIcon} alt='homeIcon' />
            </Link>
            <font>Главная</font>
          </div>

          <div className={currentPath === '/counter' ? s.active : s.disactive}>
            <Link to='/counter'>
              <img src={plusIcon} alt='plusIcon' className={s.plusIcon} />
            </Link>
            <font>Счёт</font>
          </div>

          <div className={currentPath === '/profile' ? s.active : s.disactive}>
            <Link to='/profile'>
              <img src={profileIcon} alt='profileIcon' />
            </Link>
            <font>Профиль</font>
          </div>
        </div>
      )}
    </>
  )
}

export default Tabbar
