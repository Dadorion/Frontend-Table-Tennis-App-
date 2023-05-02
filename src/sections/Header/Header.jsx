import React from 'react';
import s from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

function Header() {

   return (
      <div className={s.header}>
      <HeaderTop />
      <HeaderBottom/>
   </div>
   )
}

export default Header;