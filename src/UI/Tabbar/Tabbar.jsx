import s from "./Tabbar.module.css";
import statsIcon from "../../icons/svg/stats.svg";
import userIcon from "../../icons/svg/users.svg";
import historyIcon from "../../icons/svg/history.svg";
import homeIcon from "../../icons/svg/home.svg";
import plusIcon from "../../icons/svg/plus.svg";
import { Link, useLocation } from "react-router-dom";

function Tabbar(props) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/edit-my-profile" && (
        <div className={s.Tabbar}>
          <div className={location.pathname === "/" ? s.active : ""}>
            <Link to="/">
              <img src={homeIcon} alt="home_icon" />
            </Link>
            <span>Главная</span>
          </div>
          <div className={location.pathname === "/reports" ? s.active : ""}>
            <Link to="/reports">
              <img src={statsIcon} alt="stats_icon" />
            </Link>
            <span>Отчеты</span>
          </div>
          <div className={location.pathname === "/counter" ? s.active : ""}>
            <Link to="/counter">
              <img src={plusIcon} alt="plus_icon" />
            </Link>
            <span>Счетчик</span>
          </div>
          <div className={location.pathname === "/history" ? s.active : ""}>
            <Link to="/history">
              <img src={historyIcon} alt="history_icon" />
            </Link>
            <span>История</span>
          </div>
          <div className={location.pathname === "/users" ? s.active : ""}>
            <Link to="/users">
              <img src={userIcon} alt="users_icon" />
            </Link>
            <span>Игроки</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Tabbar;
