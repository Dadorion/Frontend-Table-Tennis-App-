import React from 'react'
import { connect } from 'react-redux'

import s from './Registration.module.css'
import RegistrationReduxForm from './RegistrationForm'

import loginImage from '../../assets/images/loginImage.jpg'
import { registrationTC } from '../../redux/registration-reducer'

function Registration({registrationProp}) {
  const onSubmit = (formData) => {
    registrationProp(formData)
  }

  return (
    <div className={s.Registration}>
      <img src={loginImage} alt='logo_img' />
      <h1>Регистрация</h1>
      <RegistrationReduxForm onSubmit={onSubmit} />
      Уже есть аккаунт?
      <a href='/login'>Войти</a>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  }
}

export default connect(mapStateToProps, { registrationProp: registrationTC })(Registration)
