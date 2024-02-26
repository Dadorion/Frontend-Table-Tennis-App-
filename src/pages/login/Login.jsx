import React from "react";
import s from "./Login.module.css";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { loginTC } from "../../redux/auth-reduser";
import { getProfile } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";
import loginImgage from "../../assets/images/loginImage_2.jpg";

function Login({ isAuth, loginTC, getProfile }) {
  const onSubmit = (formData) => {
    loginTC(formData);
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className={s.Login}>
      <img src={loginImgage} alt="logo_img" />
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
