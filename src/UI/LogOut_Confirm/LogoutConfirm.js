import React from 'react'
import { useDispatch } from 'react-redux'

import s from './LogoutConfirm.module.css'

import { logoutTC } from '../../redux/auth-reduser'

function LogoutConfirm(props) {
  const dispatch = useDispatch()

  const handleYes = () => {
    dispatch(logoutTC())
    props.setExitQwest(!props.exitQwest)
  }

  const handleNo = () => {
    props.setExitQwest(!props.exitQwest)
  }

  return (
    <>
      {props.exitQwest && (
        <div className={s.exit}>
          <div id={s.qwest}>You try to exit. Are you sure?</div>
          <div id={s.buttons}>
            <div id={s.yes} onClick={handleYes}>
              Yes
            </div>
            <div id={s.no} onClick={handleNo}>
              No
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LogoutConfirm
