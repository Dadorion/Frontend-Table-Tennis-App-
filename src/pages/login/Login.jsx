import React from 'react';
import s from './Login.module.css';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reduser';
import { Navigate } from 'react-router-dom';
import logimImgage from '../../images/b4e94ff0b6f1b09b24d24c7c0212a3f6.jpg'

function Login(props) {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }


  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div className={s.Login}>
      <img src={logimImgage} alt="logo_img" />
      {/* <h1>LOGIN</h1> */}
      <h1>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default connect(mapStateToProps, { login })(Login);
