import React from "react";
import s from "./personalInfo.module.css";
import pad from "../../../../icons/svg/pad.svg";
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

    const lastNum = ageNum.toString().split('').pop()
    let word

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
    return `${ageNum} ${word}`
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
            <img src={pad} alt="edit_pen" />
            <h3>Информация</h3>
          </div>
          <div className={`${s.hardInfo}`}>
            {/* <div className={s.wrapper}> */}
            <div>
              <span className={`${s.leftColumn}`}>Город</span>
              <span className={`${s.rightColumn}`}>{city}</span>
            </div>
            <hr />
            <div>
              <span className={`${s.leftColumn}`}>Область</span>
              <span className={`${s.rightColumn}`}>{region}</span>
            </div>
            <hr />
            <div>
              <span className={`${s.leftColumn}`}>Возраст</span>
              <span className={`${s.rightColumn}`}>{age(ageNum)}</span>
            </div>
            <hr />
            <div>
              <span className={`${s.leftColumn}`}>Пол</span>
              <span className={`${s.rightColumn}`}>{"мужской"}</span>
            </div>
            <hr />
            <div>
              <span className={`${s.leftColumn}`}>Процент побед</span>
              <span className={`${s.rightColumn}`}>{percentOfWin}%</span>
            </div>
            <hr />
            {/* </div> */}
          </div>
        </>
      )}
      {location.pathname === "/edit-my-profile" && (
        <>
          <div>
            <img src={pad} alt="edit_pen" />
            <h3>Информация</h3>
          </div>
          <div className={s.inpCity}>
            <span className={`${s.leftColumn}`}>Город</span>
            <input
              value={`${city}, ${region}`}
              onChange={handlerChangeCityRegion}
            />
          </div>
          <div className={s.birthday_gender}>
            <div className={s.inpBirthday}>
              <span className={`${s.leftColumn}`}>Дата рождения</span>
              <input value={birthdayDate} onChange={handlerChangeBirthday} />
            </div>
            <div className={s.inpGender}>
              <span className={`${s.leftColumn}`}>Пол</span>
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
