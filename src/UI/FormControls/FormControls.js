import React from 'react';
import s from './FormControls.module.css';


function FormControl({ input, meta, ...props }) {

   const hasErrors = meta.touched && meta.error;

   return <div className={s.formControl + ' ' + (hasErrors ? s.error : '')}>
      {props.children}
      {hasErrors && <span>{meta.error}</span>}
   </div>
}


function Input(props ) {
   const { input, meta, ...restProps } = props;
   return (
      <FormControl {...props}>
         <input {...input} {...restProps} />
      </FormControl>)
}


// function Input({ input, meta, ...props }) {

//    const hasErrors = meta.touched && meta.error;

//    return <div className={s.formControl + ' ' + (hasErrors ? s.error : '')}>
//       <input {...input} {...props} />
//       {hasErrors && <span>{meta.error}</span>}
//    </div>
// }

export default Input;