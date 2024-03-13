import React from 'react'
import s from './MasterButton.module.scss'

function MasterButton({btnName = 'xXx', isDisabled = false, submit, icon, handle, func }){
   let colorText
   let style

   if (func === 'action' && !isDisabled) {
      style = s.actionStyle
   } else if(func === 'action' && isDisabled){
      style = s.disabled
   } else if(func === 'cancel'){
      style = s.cancelStyle
   } else if(func === 'navigation'){
      style = s.navigateStyle
   } else {
      style = s.parameterStyle
   }

   return (
      <button type={submit ? 'submit' : 'button'} disabled={isDisabled} className={style} onClick={handle}>
         {icon && <img src={icon} alt='btn-icon' className={s.icon} />}
         <p className={colorText}>{btnName}</p>
      </button>
   )
}

export default MasterButton
