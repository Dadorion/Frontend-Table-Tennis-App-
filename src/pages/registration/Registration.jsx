import React from "react";
import s from "./Registration.module.css";
import RegistrationReduxForm from "./RegistrationForm";
import { connect } from "react-redux";
import { registrationTC } from "../../redux/registration-reducer";
// import { Navigate } from 'react-router-dom';
import loginImage from "../../assets/images/loginImage.jpg";

function Registration(props) {
  const onSubmit = (formData) => {
    props.registrationTC(formData);
  };

  // if (props.isAuth) {
  //   return <Navigate to={"/profile"} />
  // }
  return (
    <div className={s.Registration}>
      <img src={loginImage} alt="logo_img" />
      <h1>Регистрация</h1>
      <RegistrationReduxForm onSubmit={onSubmit} />
      Уже есть аккаунт?
      <a href="/login">Войти</a>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
}

export default connect(mapStateToProps, { registrationTC })(Registration);
