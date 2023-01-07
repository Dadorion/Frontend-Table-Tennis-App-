import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Content.module.css';
import HomePage from '../../pages/home_page/Home_page';
import Profile from '../../pages/profile/Profile';
import UsersContainer from '../../pages/users/UsersContainer';

function Content(props) {

  return (
    <div className={`${s.Content}`}>
      <Routes>
        <Route path="/" element={<HomePage store={props.store}/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/users" element={<UsersContainer/>} />
      </Routes>
    </div>

  )
}
export default Content;
