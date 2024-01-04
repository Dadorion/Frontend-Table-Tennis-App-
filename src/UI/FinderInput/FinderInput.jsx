import React from "react";
import s from "./FinderInput.module.css";
import cros from "../../icons/svg/cros.svg";
import { useDispatch } from "react-redux";
import {
  requestUsers,
  requestUsersWithName,
  setFindUserNameTC,
  setUsers,
} from "../../redux/users-reducer";

function FinderInput(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setFindUserNameTC(""));
    dispatch(setUsers([]));
    dispatch(requestUsers(1, 10));
  };
  const handleOnCangeFind = (e) => {
    const text = e.target.value.trim(); // Удаляем пробелы в начале и в конце

    if (text === "") {
      dispatch(setFindUserNameTC(""));
      dispatch(setUsers([]));
      dispatch(requestUsers(1, 10));
    } else {
      // Если есть текст, делаем запрос на пользователей с соответствующим именем
      dispatch(setFindUserNameTC(text));
      setTimeout(() => {
        dispatch(requestUsersWithName(text));
      }, 300);
    }
  };

  return (
    <div className={s.FinderInput}>
      <input
        name="findUserName"
        type="text"
        placeholder="начните вводить имя"
        value={props.findUserName}
        onChange={handleOnCangeFind}
      />
      <div className={s.cros} onClick={handleClose}>
        <img src={cros} alt="cros" />
      </div>
    </div>
  );
}

export default FinderInput;
