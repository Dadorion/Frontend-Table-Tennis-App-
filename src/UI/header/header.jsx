import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import edit_pen_w from "../../icons/svg/edit_pen_w.svg";
import cros_w from "../../icons/svg/cros_w.svg";

function Header(props) {
  return (
    <div className={s.header}>
      <Link to={props.left}>
        <div className={s.tapArea}>
          {props.left && <img src={edit_pen_w} alt="edit_pen" />}
        </div>
      </Link>
      <span>{props.headName || 'заголовок'}</span>
      <Link to={props.right}>
        <div className={s.tapArea}>
          {props.right && <img src={cros_w} alt="cros_w" />}
        </div>
      </Link>
    </div>
  );
}
export default Header;
