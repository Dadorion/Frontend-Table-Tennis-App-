import s from "./Tabbar.module.css";
import profileIcon from "../../icons/svg_pack/Black/Light/User_light.svg";
import homeIcon from "../../icons/svg_pack/Black/Regular/House.svg";
import plusIcon from "../../icons/svg_pack/Black/Regular/AddCircle.svg";
import { Link, useLocation } from "react-router-dom";

function Tabbar(props) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/edit-my-profile" && (
        <div className={s.Tabbar}>
          <div className={location.pathname === "/" ? s.active : s.disactive}>
            <Link to="/">
              <img src={homeIcon} alt="homeIcon" />
            </Link>
            <font>Главная</font>
          </div>
          
          <div className={location.pathname === "/counter" ? s.active : s.disactive}>
            <Link to="/counter">
              <img src={plusIcon} alt="plusIcon" className={s.plusIcon}/>
            </Link>
            <font>Счёт</font>
          </div>
          
          <div className={location.pathname === "/users" ? s.active : s.disactive}>
            <Link to="/profile">
              <img src={profileIcon} alt="profileIcon" />
            </Link>
            
            <font>Профиль</font>
          </div>
        </div>
      )}
    </>
  );
}

export default Tabbar;
