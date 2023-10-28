import React from 'react';
import s from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderContent from './Header_content';

function Header(props) {

   return (
      <div className={s.header}>
         <HeaderTop />
         <HeaderContent />
      </div>
   )
}

export default Header;