import React, { useState } from "react";
import s from "./User_item.module.css";
import ExtraInfo from "./extra_info";
import v_down from "../../icons/svg/v_arrow_down.svg";
import user_pic from "../../icons/profile.png";

function UserItem(props) {
  const [showExtra, setShowExtra] = useState(false);

  const handleVArrow = () => {
    setShowExtra(!showExtra);
  };

  return (
    <div className={s.Item}>
      <div className={s.mainInfo}>
        <div className={s.miniCard}>
          <div className={s.userInfo}>
            <img id={s.avatar} src={user_pic} alt="avatar" />
            <div className={s.userDetail}>
              <div>{props.name}</div>
              <div className={s.subtitle}>{`побед: ${props.pers}%`}</div>
            </div>
          </div>
          <div className={s.tapContainer} onClick={handleVArrow}>
            <img
              id={s.v_down}
              className={showExtra ? s.v_down_invert : ""}
              src={v_down}
              alt="v_down"
            />
          </div>
        </div>
      </div>
      {showExtra && <ExtraInfo />}
    </div>
  );
}

export default UserItem;