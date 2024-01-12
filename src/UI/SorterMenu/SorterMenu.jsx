import React from "react";
import s from "./SorterMenu.module.css";

function SorterMenu({handlesetSortMode}) {
  const sortItems = [
    "Последние",
    "Частые",
    "Давние",
    "По алфавиту (А – Я)",
    "По алфавиту (Я – А)",
    "По победам (от большего)",
    "По победам (от меньшего)",
  ]
  const items = sortItems.map(item => {
    return (
      <div>{item}</div>
    )
  })
  return (
    <div className={s.sortMenu} onClick={handlesetSortMode}>
      {items}
    </div>
  );
}

export default SorterMenu;
