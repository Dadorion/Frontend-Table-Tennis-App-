/* eslint-disable */
import React from "react";

import s from "./Confirm_popup.module.css";

function ConfirmPopUp({
  dispatchQuest,
  setDispatchQuest,
  setSaveQuest,
  setExitQWest,
  saveQuest,
  exitQuest,
}) {
  const handleYes = () => {
    if (dispatchQuest !== undefined) {
      setDispatchQuest(!dispatchQuest);
      setSaveQuest(!saveQuest);
    } else {
      setExitQWest(!exitQuest);
    }
  };

  const handleNo = () => {
    setSaveQuest(!saveQuest);
  };

  return (
    <>
      {saveQuest && (
        <div className={s.exit}>
          <div id={s.quest}>Are you sure?</div>
          <div id={s.buttons}>
            <div id={s.yes} onClick={handleYes}>
              Канеш
            </div>
            <div id={s.no} onClick={handleNo}>
              Не не не...
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmPopUp;
