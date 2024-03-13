import React from "react";

import s from "./Tournament.module.scss";

import Header from "../../UI/header/header";

import userPlusIcon from "../../assets/icons/svg_pack/Black/Regular/UserPlus.svg";
import infoIcon from "../../assets/icons/svg_pack/Black/Light/Info_light.svg";
import Button from "../../UI/Buttons/MasterButton/MasterButton";
import ArrowInput from '../../UI/inputs/ArrowInput/ArrowInput'

function Tournament() {
  const handlerStart = () => {
    window.alert("Старт турнира");
  };
  return (
    <div className={s.Tournament}>
      <Header headName="Настройки турнира" />

      <div className={s.settingList}>
        <div>
          <div className={s.title}>Система</div>
          <div className={s.setting}>круговая</div>
        </div>
        <div>
          <div className={s.title}>Круги</div>
          <div className={s.setting}>
            <ArrowInput />
          </div>
        </div>
        <div>
          <div className={s.title}>Партии</div>
          <div className={s.setting}>
            <ArrowInput />
          </div>
        </div>
        <div>
          <div className={s.title}>Подсчет итогов</div>
          <div className={s.setting}>
            <ArrowInput />
          </div>
        </div>
        <div className={s.note}>
          <img src={infoIcon} alt="infoIcon" />
          <p>Каждая выигранная партия добавляет одно очко</p>
        </div>
      </div>
      <div className={s.playersList}>
        <h3>Участники турнира</h3>
        <div className={s.players}>
          <img src={userPlusIcon} alt="userPlusIcon" />
          <p>Добавить</p>
        </div>
      </div>

      {/* <Button />
      <Button btnName='Начать турнир' />
      <Button btnName='Начать турнир' func='navigation'/>
      <Button btnName='Начать турнир' handle={handlerStart} icon={infoIcon} func='action'/>
      <Button btnName='Начать турнир' handle={handlerStart} func='cancel'/> */}
      <div className={s.btnStart}>
        <Button
          isDisabled
          btnName="Начать турнир"
          handle={handlerStart}
          func="action"
        />
      </div>
    </div>
  );
}

export default Tournament;
