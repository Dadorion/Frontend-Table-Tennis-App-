import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/svg_pack/White/Light/Edit.svg";
import backIcon from "../../assets/icons/svg_pack/White/Regular/ArrowLeft.svg"
import checkIcon from "../../assets/icons/svg_pack/White/Regular/Check.svg"

function Header(props) {
  return (
    <div className={s.header}>
      <Link to={props.exit}>
        <div className={s.tapArea}>
          {props.exit && <img src={backIcon} alt="backIcon" />}
        </div>
      </Link>
      <p>{props.headName || 'заголовок'}</p>
      <Link to={props.edit}>
        <div className={s.tapArea}>
          {props.edit && <img src={editIcon} alt="edit_pen" />}
          {props.confirm && <img src={checkIcon} alt="checkIcon" />}
        </div>
      </Link>
    </div>
  );
}
export default Header;
