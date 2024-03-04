import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import s from './HeadMenu.module.css'

import avatarAlt from '../../icons/profile.png'
import gear from '../../icons/svg/gear.svg'
import ring from '../../icons/svg/note_ring.svg'
import { getProfile } from '../../redux/profile-reducer'

function HeadMenu(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    // Выполняем запрос профиля при монтировании компонента
    dispatch(getProfile())
  }, [dispatch])
  const profile = useSelector((state) => state.profileReducer.profile)

  if (!profile) {
    return <>Loading...</>
  }
  const avatar = profile.photo_path
  const avatarPath = `http://localhost:5000/${avatar}`

  return (
    <div className={s.HeadMenu}>
      <Link to='/profile'>
        <div className={s.block}>
          <img src={avatarPath || avatarAlt} alt='avatar' />
          <span className={s.name}>{`${props.user.name} ${props.user.surname}`}</span>
        </div>
      </Link>

      <div className={s.block}>
        <img src={ring} alt='ring' className={s.ring} />
        <img src={gear} alt='gear' className={s.gear} />
      </div>
    </div>
  )
}

export default HeadMenu
