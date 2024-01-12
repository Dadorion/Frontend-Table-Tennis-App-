import React from "react";
import s from "./DayCard.module.css";
import UserItem from "../../../UI/User_Item/User_item";

function DayCard(props) {
  if (!props.users) {
    return <div className={s.Users}>Loading...</div>;
  }

  const matches = props.users.map((user) => {
    const handlePlayer =()=>{
      window.alert('Смотрим пользователя')
    }
    return (
      <div className={s.match_item}>
        <div className={s.score}>3:2</div>
        <div className={s.player} onClick={handlePlayer}>
          <UserItem
            key={`user_${user.id}`}
            name={user.name}
            surname={user.surname}
            pers={user.winsPersent}
            photoPath={user.photo_path}
          />
        </div>
      </div>
    );
  });

  return (
    <div className={s.DayCard}>
      <div className={s.header}>
        <span>24 декабря</span>
        <span>с. Ст. Хопер</span>
      </div>
      <div className={s.matches}>
        {matches}
      </div>
    </div>
  );
}

export default DayCard;
