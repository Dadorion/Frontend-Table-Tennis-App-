import React from "react";
import s from "./Login.module.css";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import { getProfile } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";
import loginImage from "../../assets/images/loginImage_2.jpg";

function Login({ isAuth, loginTC, getProfile }) {
  const onSubmit = (formData) => {
    loginTC(formData);
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className={s.Login}>
      <img src={loginImage} alt="logo_img" />
      <h1>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  };
}

export default connect(mapStateToProps, { loginTC, getProfile })(Login);
