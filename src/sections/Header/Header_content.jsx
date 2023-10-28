import React from 'react';
import s from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDataThunkCreator } from '../../redux/header-reduser';

function HeaderContent(props) {
   const state = useSelector(state => state.headerReduser)
   const dispatch = useDispatch()

   function getData() {
      dispatch(getDataThunkCreator())
   }

   return (
      <div className={s.header}>
         {
            state.isFetching
               ? ('Loading...')
               : (<button onClick={getData}>Get Data</button>)
         }
         {state.profileInfo && <div>{state.profileInfo.name + ' ' + state.profileInfo.surname}</div>}
      </div>
   )
}

export default HeaderContent;