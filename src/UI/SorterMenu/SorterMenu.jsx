import React from "react";
import s from "./SorterMenu.module.css";

function SorterMenu() {
  return (
    <div className={s.sortMenu}>
      <div>Последние</div>
      <div>Частые</div>
      <div>Давние</div>
      <div>По алфавиту (А – Я)</div>
      <div>По алфавиту (Я – А)</div>
      <div>По победам (от большего)</div>
      <div>По победам (от меньшего)</div>
    </div>
  );
}

export default SorterMenu;
