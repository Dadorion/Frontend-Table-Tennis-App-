import React from "react";
import s from "./CustomButton.module.css";
import exitIcon from "../../../icons/svg_pack/Colored/SignOut_secondary_pink.svg";
import changePassIcon from "../../../icons/svg_pack/Black/Regular/Key.svg";
import reportIcon from "../../../icons/svg_pack/Black/Regular/Callback.svg";

function CustomButton({ btnName, handler }) {
  let icon, color;
  switch (btnName) {
    case "Выйти из профиля":
      icon = exitIcon;
      color = s.pink;
      break;
    case "Сменить пароль":
      icon = changePassIcon;
      break;
    case "Сообщить об ошибке":
      icon = reportIcon;
      break;

    default:
      break;
  }

  return (
      <div className={s.CustomButton} onClick={handler}>
        <img src={icon} alt="btn-icon" className={s.icon} />
        <p className={color}>{btnName || "no props"}</p>
      </div>
  );
}

export default CustomButton;
