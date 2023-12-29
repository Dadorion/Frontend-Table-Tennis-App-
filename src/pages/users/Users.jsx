import React, { useState } from "react";
import s from "./Users.module.css";
import sorterIcon from "../../icons/svg/sorter.svg";
import settingsIcon from "../../icons/svg/settings.svg";
import UserItem from "../../UI/User_Item/User_item";
import magnifier from "../../icons/svg/magnifier.svg";
import SorterMenu from "../../UI/SorterMenu/SorterMenu";

function Users(props) {
  const [showSorter, setShowSorter] = useState(false);

  const handleSort = () => {
    setShowSorter(!showSorter);
  };

  return (
    <div className={`${s.Users}`}>
      <div className={`${s.header}`}>
        <span>Список игроков</span>
        <img src={magnifier} alt="magnifier" />
      </div>
      <div className={`${s.filter}`}>
        <div className={`${s.sorter}`}>
          <div onClick={handleSort}>
            <img src={sorterIcon} alt="filter_icon" />
            Последние
          </div>
        </div>
        {showSorter && (
          <SorterMenu />
        )}

        <div>
          <img src={settingsIcon} alt="filter_icon" />
        </div>
      </div>
      <div className={`${s.list}`}>
        <UserItem name="Алексеев Михаил" pers="43" />
        <UserItem name="Иванов Сергей" pers="21" />
        <UserItem name="Сергеев Анатолий" pers="67" />
        <UserItem name="Ковалёва Инна" pers="51" />
        <UserItem name="Алексеев Михаил" pers="43" />
        <UserItem name="Иванов Сергей" pers="21" />
        <UserItem name="Сергеев Анатолий" pers="67" />
        <UserItem name="Ковалёва Инна" pers="51" />
      </div>
    </div>
  );
}
export default Users;
