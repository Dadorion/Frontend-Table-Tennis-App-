import React from 'react';
import preloader from '../../icons/ZZ5H.gif';
import s from './Preloader.module.css';

function Preloader(props) {
   return (
      <div className={`${s.Preloader}`}>
         <img src={preloader} alt="preloader"/>
      </div>)
}
export default Preloader;