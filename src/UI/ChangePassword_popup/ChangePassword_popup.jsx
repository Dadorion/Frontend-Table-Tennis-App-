import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./ChangePassword_popup.module.css";
import crosIcon from "../../assets/icons/svg_pack/Black/Regular/Close.svg";
import checkIcon from "../../assets/icons/svg_pack/White/Regular/Check.svg";
import InputPassword from "../InputPassword/InputPassword";
import {
  changeOldPassword,
  changeNewPasswordOne,
  changeNewPasswordTwo,
  changePassword,
} from "../../redux/profile-reducer";

function ChangePasswordPopup(props) {
  const dispatch = useDispatch();

  const [passwordsDoNotMatch, setErrorPassword] = useState(false);

  const handleConfirm = () => {
    if (props.newPasswordData.newPasswordOne === props.newPasswordData.newPasswordTwo) {
      setErrorPassword(false);
      dispatch(changePassword(props.newPasswordData))
    } else {
      setErrorPassword(true);
    }
  };
  const handleChangeOldPass = (text) => {
    dispatch(changeOldPassword(text));
  };
  const handleChangeNewPassOne = (text) => {
    dispatch(changeNewPasswordOne(text));
  };
  const handleChangeNewPassTwo = (text) => {
    dispatch(changeNewPasswordTwo(text));
  };
  const handleCancel = () => {
    props.setQwest(!props.qwest);
  };
  const handleFogotPass = () => {
    window.alert("Попей таблеток для памяти.");
  };

  return (
    <>
      {props.qwest && (
        <div className={s.Popup}>
          <div className={s.container}>
            <div className={s.cros}>
              <div className={s.tapArea} onClick={handleCancel}>
                <img src={crosIcon} alt="crosIcon" />
              </div>
            </div>

            <h2>Смена пароля</h2>
            <div>
              <p>Введите старый пароль</p>
              <InputPassword
                value={props.newPasswordData.oldPassword}
                handle={handleChangeOldPass}
              />
              <div>
                <span onClick={handleFogotPass}>Забыли пароль?</span>
              </div>
            </div>
            <div>
              <p>Введите новый пароль</p>
              <InputPassword
                value={props.newPasswordData.newPasswordOne}
                handle={handleChangeNewPassOne}
              />
            </div>
            <div>
              {passwordsDoNotMatch && (
                <span className={s.passwordsDoNotMatch}>
                  Пароли не совпадают
                </span>
              )}
            </div>

            <div>
              <p>Повторите новый пароль</p>
              <InputPassword
                value={props.newPasswordData.newPasswordTwo}
                handle={handleChangeNewPassTwo}
              />
            </div>

            <button onClick={handleConfirm}>
              <img src={checkIcon} alt="checkIcon" />
              <p>Готово</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChangePasswordPopup;
