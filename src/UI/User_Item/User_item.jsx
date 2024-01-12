import React  /*, {useState}  */ from "react";
import s from "./User_item.module.css";
// import ExtraInfo from "./extra_info";
// import racket from "../../icons/svg/racket.svg";
import user_pic from "../../icons/profile.png";

function UserItem(props) {
  // const [showExtra, setShowExtra] = useState(false);

  // const handleVArrow = () => {
  //   setShowExtra(!showExtra);
  // };
  const winsPersentStr =
    props.pers !== "пока нет побед" ? `побед: ${props.pers}%` : props.pers;

  const avatar = props.photoPath
    ? `http://localhost:5000/${props.photoPath}`
    : user_pic;

  return (
    <div className={s.Item}>
      <div className={s.mainInfo}>
        <div className={s.miniCard}>
          <div className={s.userInfo}>
            <img id={s.avatar} src={avatar} alt="avatar" />
            <div className={s.userDetail}>
              <div>{`${props.name} ${props.surname}`}</div>
              <div className={s.subtitle}>{winsPersentStr}</div>
            </div>
          </div>
          {/* <div className={s.tapContainer} onClick={handleVArrow}>
            <img
              id={s.v_down}
              className={showExtra ? s.v_down_invert : ""}
              src={racket}
              alt="v_down"
            />
          </div> */}
        </div>
      </div>
      {/* <hr /> */}
      {/* {showExtra && <ExtraInfo />} */}
    </div>
  );
}

export default UserItem;
