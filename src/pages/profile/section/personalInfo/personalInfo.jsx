import React from "react";
import s from "./personalInfo.module.css";
import { useLocation } from "react-router-dom";
import {
  changeCity,
  changeRegion,
  changeBirthday,
} from "../../../../redux/profile-reducer";
import { useDispatch } from "react-redux";

function PersonalInfo({ city, region, birthday, percentOfWin }) {
  const dispatch = useDispatch();

  const ageNum = new Date().getFullYear() - new Date(birthday).getFullYear();
  function age(ageNum) {
    const lastNum = ageNum.toString().split("").pop();
    let word;

    if (ageNum === 0 || ageNum === 11) {
      word = "лет";
    } else if (ageNum > 10 && ageNum < 20) {
      word = "лет";
    } else if (ageNum > 0 && lastNum === 1) {
      word = "год";
    } else if (lastNum < 5 && lastNum > 0) {
      word = "года";
    } else if (lastNum >= 5) {
      word = "лет";
    } else if (lastNum === 0) {
      word = "лет";
    }
    return `${ageNum} ${word}`;
  }

  const birthdayDate = `${new Date(birthday).getDate()}.${
    new Date(birthday).getMonth() + 1
  }.${new Date(birthday).getFullYear()}`;
  const location = useLocation();

  const handlerChangeCityRegion = (e) => {
    const text = e.target.value;
    const newCity = text.split(", ")[0];
    const newRegion = text.split(", ")[1] || "";
    // TODO дописать логику проверки правильности заполнения.
    dispatch(changeCity(newCity));
    dispatch(changeRegion(newRegion));
  };
  const handlerChangeBirthday = (e) => {
    const text = e.target.value;
    dispatch(changeBirthday(text));
  };

  return (
    <div className={s.PersonalInfo}>
      {location.pathname === "/profile" && (
        <>
          <div>
            <h3>Информация</h3>
          </div>

          <div className={s.hardInfo}>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Город</p>
                <p className={s.rightColumn}>{city}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Область</p>
                <p className={s.rightColumn}>{region}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Возраст</p>
                <p className={s.rightColumn}>{age(ageNum)}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Пол</p>
                <p className={s.rightColumn}>{"мужской"}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Процент побед</p>
                <p className={s.rightColumn}>{percentOfWin}%</p>
              </div>
            </div>
          </div>
        </>
      )}
      {location.pathname === "/edit-my-profile" && (
        <>
          <div>
            <h3>Информация</h3>
          </div>
          <div className={s.inpCity}>
            <p className={s.leftColumn}>Город</p>
            <input
              value={`${city}, ${region}`}
              onChange={handlerChangeCityRegion}
            />
          </div>
          <div className={s.birthday_gender}>
            <div className={s.inpBirthday}>
              <p className={s.leftColumn}>Дата рождения</p>
              <input value={birthdayDate} onChange={handlerChangeBirthday} />
            </div>
            <div className={s.inpGender}>
              <p className={s.leftColumn}>Пол</p>
              <select id="gender" name="gender">
                <option value="male">мужской</option>
                <option value="female">женский</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalInfo;
