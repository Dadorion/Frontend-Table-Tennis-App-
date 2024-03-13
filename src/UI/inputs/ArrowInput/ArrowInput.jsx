import React from "react";
import s from "./ArrowInput.module.scss";

import caretLeftIcon from '../../../assets/icons/svg_pack/Black/Regular/CaretLeft.svg'
import caretRightIcon from '../../../assets/icons/svg_pack/Black/Regular/CaretRight.svg'

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
