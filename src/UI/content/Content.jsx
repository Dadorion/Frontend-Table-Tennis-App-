import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './Content.module.css';
import HomePage from '../../pages/home_page/Home_page';
// import UsersContainer from '../../pages/users/UsersContainer';
import ProfileContainer from '../../pages/profile/ProfileContainer';
import Login from '../../pages/login/LoginContainer';

const UsersContainer = React.lazy(() => import('../../pages/users/UsersContainer'));

function Content(props) {

  return (
    <div className={`${s.Content}`}>
      <Routes>
        <Route path="/" element={<HomePage store={props.store}
        // isAuth={props.store.auth.isAuth}
        />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/users" element={
          <Suspense fallback={<div>Loading...</div>}>
            <UsersContainer />
          </Suspense>

        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  )
}
export default Content;
