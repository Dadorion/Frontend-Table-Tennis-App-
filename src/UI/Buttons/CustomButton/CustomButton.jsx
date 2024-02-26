import React from "react";
import s from "./CustomButton.module.css";
import exitIcon from "../../../assets/icons/svg_pack/Colored/SignOut_secondary_pink.svg";
import changePassIcon from "../../../assets/icons/svg_pack/Black/Regular/Key.svg";
import reportIcon from "../../../assets/icons/svg_pack/Black/Regular/Callback.svg";
import checkIcon from "../../../assets/icons/svg_pack/White/Regular/Check.svg"
import deleteIcon from "../../../assets/icons/svg_pack/Colored/Delete.svg"

function CustomButton({ btnName, handler }) {
  let icon, colorText, style;
  switch (btnName) {
    case "Выйти из профиля":
      icon = exitIcon;
      colorText = s.pink;
      style = s.CustomButton
      break;
    case "Сменить пароль":
      icon = changePassIcon;
      style = s.CustomButton
      break;
    case "Сообщить об ошибке":
      icon = reportIcon;
      style = s.CustomButton
      break;
    case "Удалить игрока":
      icon = deleteIcon;
      colorText = s.pink;
      style = s.CustomButton
      break;
    case "Готово":
      icon = checkIcon;
      style = s.CustomButtonDone;
      break;
    case "Добавить":
      icon = checkIcon;
      style = s.CustomButtonDone;
      break;

    default:
      break;
  }

  return (
      <div className={style} onClick={handler}>
        <img src={icon} alt="btn-icon" className={s.icon} />
        <p className={colorText}>{btnName || "no props"}</p>
      </div>
  );
}

export default CustomButton;
