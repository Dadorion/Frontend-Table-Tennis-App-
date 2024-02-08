import React from "react";
import s from "./Popup_EditPlayer.module.css";
// import { useDispatch } from "react-redux";
import closeIcon from "../../icons/svg_pack/Black/Regular/Close.svg";
import CustomButton from "../Buttons/CustomButton/CustomButton";

function Popup_EditPlayer({ exit }) {
  // const dispatch = useDispatch();
  const handleExit = () => {
    exit(false);
  };

  return (
    <div className={s.EditPlayer}>
      <div className={s.closeIcon} onClick={handleExit}>
        <img src={closeIcon} alt="closeIcon" />
      </div>
      <div className={s.header}>
        <h2>Редактировать</h2>
      </div>
      <div className={s.inputsName}>
        <div>
          <p>Имя</p>
          <input type="text" placeholder="Имя" />
        </div>
        <div>
          <p>Фамилия</p>
          <input type="text" placeholder="Фамилия" />
        </div>
      </div>
      <div>
        <CustomButton btnName="Удалить игрока" />
      </div>
      <div>
        <CustomButton btnName="Готово" />
      </div>
    </div>
  );
}

export default Popup_EditPlayer;
