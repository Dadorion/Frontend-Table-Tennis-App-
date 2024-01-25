import React from "react";
import s from "./ChangePassword_popup.module.css";
import crosIcon from "../../icons/svg_pack/Black/Regular/Close.svg";
import checkIcon from "../../icons/svg_pack/White/Regular/Check.svg";

function ChangePasswordPopup(props) {
  // const handleConfirm = () => {
  //   if (props.dispatchQwest !== undefined) {
  //     // props.setDispatchQwest(!props.dispatchQwest);
  //     props.setQwest(!props.qwest);
  //   } else {
  //     props.setQwest(!props.qwest);
  //   }
  // };

  const handleCancel = () => {
    props.setQwest(!props.qwest);
  };

  return (
    <>
      {props.qwest && (
        <div className={s.Popup}>
          <div className={s.container}>
            <div className={s.tapArea} onClick={handleCancel}>
              <img src={crosIcon} alt="crosIcon" />
            </div>

            <h2>Смена пароля</h2>
            <div>
              <p>Введите старый пароль</p>
              <input type="text" />
              <span>Забыли пароль?</span>
            </div>
            <p>Введите новый пароль</p>
            <input type="text" />
            <p>Повторите новый пароль</p>
            <input type="text" />
            <button>
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
