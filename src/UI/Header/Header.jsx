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
            {/* <NavLink to='statistic'>Статистика</NavLink> */}
            {/* <NavLink to='profile'>Мой профиль</NavLink> */}
            <NavLink to='users'>Игроки</NavLink>
            {props.isAuth
               ? <NavLink to='profile/27483'>
                  <div>
                     {props.login} - <button onClick={props.logout}>Log out</button>
                  </div>
                  
               </NavLink>
               : <NavLink to='login'>Login</NavLink>}
         </div>
      </div>
   )
}

export default Header;