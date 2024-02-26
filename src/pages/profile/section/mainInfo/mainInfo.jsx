import React, { useState } from "react";
import s from "./mainInfo.module.css";
import avatarAlt from "../../../../assets/images/profile.png";
import { useLocation } from "react-router-dom";
import {
  changeName,
  changeSurname,
  changeStatus,
  saveStatus,
} from "../../../../redux/profile-reducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function MainInfo({ name, surname, status, avatar }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);

  const handlerChangeName = (e) => {
    const text = e.target.value;
    dispatch(changeName(text));
    // TODO не работает. проверить
  };
  const handlerChangeSurname = (e) => {
    const text = e.target.value;
    dispatch(changeSurname(text));
  };
  const handleChangeStatus = (e) => {
    const text = e.target.value;
    dispatch(changeStatus(text));
  };
  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };
  const handleSaveStatus = () => {
    dispatch(saveStatus(status));
    setEditStatus(!editStatus);
  };

  return (
    <div className={s.MainInfo}>
      {name && (
        <>
          {location.pathname === "/profile" && (
            <>
              <div>
                <img src={avatar || avatarAlt} alt="avatar" />
              </div>

              <div className={`${s.name_status}`}>
                <div className={`${s.name}`}>
                  <h2>
                    {name} {surname}
                  </h2>
                </div>
                {!editStatus && (
                  <span className={`${s.status}`} onClick={handleEditStatus}>
                    {status || "Нажми, чтобы изменить свой статус"}
                  </span>
                )}
                {editStatus && (
                  <input
                    value={status}
                    onChange={handleChangeStatus}
                    onBlur={handleSaveStatus}
                  />
                )}
              </div>
            </>
          )}
          {location.pathname === "/edit-my-profile" && (
            <>
              <div className={s.avatar}>
                <img src={avatar || avatarAlt} alt="avatar" />
                <Link to={"/edit-photo"}>
                  <span>изменить</span>
                </Link>
              </div>

              <div className={`${s.name_status}`}>
                <div className={`${s.name}`}>
                  <input
                    value={name}
                    placeholder="Имя"
                    onChange={handlerChangeName}
                  />
                  <input
                    value={surname}
                    placeholder="Фамилия"
                    onChange={handlerChangeSurname}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}

      {!name && <div>нет данных в пропсах</div>}
    </div>
  );
}

export default MainInfo;
