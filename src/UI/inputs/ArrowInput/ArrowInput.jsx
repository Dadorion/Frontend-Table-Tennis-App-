import React from "react";
import caretLeftIcon from "@icons/Black/Regular/CaretLeft.svg";
import caretRightIcon from "@icons/Black/Regular/CaretRight.svg";

import s from "./ArrowInput.module.scss";

function ArrowInput() {
  return (
    <div className={s.ArrowInput}>
      <img src={caretLeftIcon} alt="caretLeftIcon" />
      <input type="text" />
      <img src={caretRightIcon} alt="caretRightIcon" />
    </div>
  );
}

export default ArrowInput;
