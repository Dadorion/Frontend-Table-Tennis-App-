import React, { useState } from "react";
import s from "./mainInfo.module.css";
import avatarAlt from "../../../../icons/profile.png";
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

  // TODO забрать полезный код для отображения размера файла
  // function returnFileSize(number) {
  //   if (number < 1024) {
  //     return `${number} bytes`;
  //   } else if (number >= 1024 && number < 1048576) {
  //     return `${(number / 1024).toFixed(1)} KB`;
  //   } else if (number >= 1048576) {
  //     return `${(number / 1048576).toFixed(1)} MB`;
  //   }
  // }

  const handlerChangeName = (e) => {
    const text = e.target.value;
    dispatch(changeName(text));
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
                  <h1>
                    {name} {surname}
                  </h1>
                </div>
                {!editStatus && (
                  <div className={`${s.status}`} onClick={handleEditStatus}>
                    {status || "Я играю в настольный теннис"}
                  </div>
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
