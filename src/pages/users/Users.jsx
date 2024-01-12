import React, { useState } from "react";
import s from "./Users.module.css";
import sorterIcon from "../../icons/svg/sorter.svg";
import settingsIcon from "../../icons/svg/settings.svg";
import UserItem from "../../UI/User_Item/User_item";
import magnifier from "../../icons/svg/magnifier.svg";
import SorterMenu from "../../UI/SorterMenu/SorterMenu";
import FilterMenu from "../../UI/FilterMenu/FilterMenu";
import FinderInput from "../../UI/FinderInput/FinderInput";

function Users(props) {
  const [showSorter, setShowSorter] = useState(false);
  const [sortMode, setSortMode] = useState("Последние");
  const [showFilters, setShowFilters] = useState(false);
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

  const handleSetSortMode = (e) => {
    const mode = e.target.innerHTML;
    setSortMode(mode);
  };
  const handleSort = () => {
    setShowSorter(!showSorter);
  };
  const handleFilter = () => {
    setShowFilters(!showFilters);
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
            <div className={`${s.sortMode}`} onClick={handleSort}>
              <img src={sorterIcon} alt="filter_icon" />
              {sortMode}
            </div>
          </div>
          {showSorter && <SorterMenu handleSetSortMode={handleSetSortMode} />}
          {showFilters && <FilterMenu handleSetSortMode={handleSetSortMode} setShowFilters={setShowFilters}/>}

          <div onClick={handleFilter}>
            <img src={settingsIcon} alt="filter_icon" />
          </div>
        </div>
      )}

      <div className={`${s.list}`}>{users}</div>
    </div>
  );
}
export default Users;
