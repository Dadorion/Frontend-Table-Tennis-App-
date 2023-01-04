import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {

   return (
      <div className={`${s.Header}`}>
         <NavLink to='/' className={`${s.logo}`}>
            <div>tt | st.Hoper</div>
         </NavLink>

         <div className={`${s.menu}`}>
            <NavLink to='statistic'>Статистика</NavLink>
            <NavLink to='profile'>Мой профиль</NavLink>
         </div>
      </div>
   )
}

export default Header;