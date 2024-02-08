import React from "react";
import s from "./Popup_AddNewPlayer.module.css";
import { useDispatch } from "react-redux";
import closeIcon from "../../icons/svg_pack/Black/Regular/Close.svg";
import CustomButton from "../Buttons/CustomButton/CustomButton";
import {
  setNewName,
  setNewSurname,
  addNewPlayerTC,
} from "../../redux/players-reducer";

function Popup_AddNewPlayer({ exit, player }) {
  const dispatch = useDispatch();
  const handleExit = () => {
    exit(false);
  };
  const handleChangeName = (e) => {
    dispatch(setNewName(e.target.value));
  };
  const handleChangeSurname = (e) => {
    dispatch(setNewSurname(e.target.value));
  };
  const handleAddNewPlayer = () => {
    dispatch(
      addNewPlayerTC(player.newPlayerData.name, player.newPlayerData.surname)
    );
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
          <input
            type="text"
            value={player.newPlayerData.name}
            onChange={handleChangeName}
          />
        </div>
        <div>
          <p>Фамилия</p>
          <input
            type="text"
            value={player.newPlayerData.surname}
            onChange={handleChangeSurname}
          />
        </div>
      </div>

      {player.isComplete && (
        <div>
          <p>{`Игрок добавлен`}</p>
        </div>
      )}
      <div>
        <CustomButton btnName="Добавить" handler={handleAddNewPlayer} />
      </div>
    </div>
  );
}

export default Popup_AddNewPlayer;
