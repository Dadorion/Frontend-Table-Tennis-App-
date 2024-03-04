import React from 'react'

import s from './Confirm_popup.module.css'

function ConfirmPopUp(props) {
  const handleYes = () => {
    if (props.dispatchQwest !== undefined) {
      props.setDispatchQwest(!props.dispatchQwest)
      props.setSaveQwest(!props.saveQwest)
    } else {
      props.setExitQWest(!props.exitQwest)
    }
  }

  const handleNo = () => {
    props.setSaveQwest(!props.saveQwest)
  }

  return (
    <>
      {props.saveQwest && (
        <div className={s.exit}>
          <div id={s.qwest}>Are you sure?</div>
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
  )
}

export default ConfirmPopUp
