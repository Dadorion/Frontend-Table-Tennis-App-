import React from 'react';
import s from './Registration.module.css';
import RegistrationReduxForm from './RegistrationForm';
import { connect } from 'react-redux';
import { registration } from '../../redux/auth-reduser';
import { Navigate } from 'react-router-dom';
import loginImgage from '../../images/15f512bdb71f5743453e06165780308b.jpg'

function Registration(props) {

  const onSubmit = (formData) => {
    props.registration(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }


  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div className={s.Registration}>
      <img src={loginImgage} alt="logo_img" />
      <h1>Регистрация</h1>

      <RegistrationReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, { registration })(Registration);
