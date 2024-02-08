import React from "react";
import s from "./FinderInput.module.css";
import closeIcon from "../../icons/svg_pack/Black/Light/Close_light.svg";
import magnifierIcon from "../../icons/svg_pack/Black/Light/Search_light.svg";

function FinderInput({value, handleOnChange, placeholder, handleReset}) {
  

  return (
    <div className={s.FinderInput}>
      <img src={magnifierIcon} className={s.magnifier} alt="magnifierIcon" />
      <div className={s.inputWrap}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
        />
      </div>
      {value && (
        <div className={s.closeIcon} onClick={handleReset}>
          <img src={closeIcon} alt="closeIcon" />
        </div>
      )}
    </div>
  );
}

export default FinderInput;
