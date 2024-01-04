import React, { useState } from "react";
import s from "./Users.module.css";
import sorterIcon from "../../icons/svg/sorter.svg";
import settingsIcon from "../../icons/svg/settings.svg";
import UserItem from "../../UI/User_Item/User_item";
import magnifier from "../../icons/svg/magnifier.svg";
import SorterMenu from "../../UI/SorterMenu/SorterMenu";
import FinderInput from "../../UI/FinderInput/FinderInput";

function Users(props) {
  const [showSorter, setShowSorter] = useState(false);
  const [showFinderUserName, setShowFinderUserName] = useState(false);
  if (!props.users) {
    return <div className={s.Users}>Loading...</div>;
  }
  const users = props.users.map((user) => {
    return (
      <UserItem
        key={user.id}
        name={user.name}
        surname={user.surname}
        pers={user.winsPersent}
        photoPath={user.photo_path}
      />
    );
  });

  const handleSort = () => {
    setShowSorter(!showSorter);
  };
  const handleFindUserName = () => {
    setShowFinderUserName(!showFinderUserName);
  };

  return (
    <div className={`${s.Users}`}>
      <div className={`${s.header}`}>
        <span>Список игроков</span>
        <img src={magnifier} alt="magnifier" onClick={handleFindUserName} />
      </div>
      {showFinderUserName && <FinderInput findUserName={props.findUserName} />}
      {!showFinderUserName && (
        <div className={`${s.filter}`}>
          <div className={`${s.sorter}`}>
            <div onClick={handleSort}>
              <img src={sorterIcon} alt="filter_icon" />
              Последние
            </div>
          </div>
          {showSorter && <SorterMenu />}

          <div>
            <img src={settingsIcon} alt="filter_icon" />
          </div>
        </div>
      )}

      <div className={`${s.list}`}>{users}</div>
    </div>
  );
}
export default Users;
