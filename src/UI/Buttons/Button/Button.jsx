import React from 'react'
import s from './Button.module.css'

function Button({ isDisabled, type = 'button', handle, buttName }) {
  switch (buttName) {
    case 'Далее':
      return (
        <div className={s.Button}>
          {/* eslint-disable-next-line */}
          <button disabled={isDisabled} type={type} onClick={handle}>
            {buttName}
          </button>
        </div>
      )
    case 'Зарегистрироваться':
      return (
        <div className={s.Button}>
          <button type='submit'>{buttName}</button>
        </div>
      )
    case 'Войти':
      return (
        <div className={s.Button}>
          {/* eslint-disable-next-line */}
          <button type={type}>{buttName}</button>
        </div>
      )
    case 'Показать':
      return (
        <div className={s.Button}>
          {/* eslint-disable-next-line */}
          <button type={type}>{buttName}</button>
        </div>
      )
    default:
      return (
        <div className={s.Button}>
          <button type='button'>Передай имя в пропсах</button>
        </div>
      )
  }
}

export default Button
