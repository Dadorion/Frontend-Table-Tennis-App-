import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import s from './MainPage.module.css';
// import HomePage from '../../pages/home_page/Home_page';
// // import UsersContainer from '../../pages/users/UsersContainer';
// import ProfileContainer from '../../pages/profile/ProfileContainer';
// import Login from '../../pages/login/LoginContainer';
import LastGame from '../../UI/LastGames/LastGames';
import Tournament from '../../UI/LastTournament/Tournament';
import TopList from '../../UI/TopList/TopList';

// const UsersContainer = React.lazy(() => import('../../pages/users/UsersContainer'));

function MainPage() {

  return (
    // <div className={`${s.Content}`}>
    //   <Routes>
    //     <Route path="/" element={<HomePage store={props.store}
    //     // isAuth={props.store.auth.isAuth}
    //     />} />
    //     <Route path="/profile/:userId" element={<ProfileContainer />} />
    //     <Route path="/profile" element={<ProfileContainer />} />
    //     <Route path="/users" element={
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <UsersContainer />
    //       </Suspense>

    //     } />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </div>
    <div className={s.main}>
      <LastGame/>
      <Tournament/>
      <TopList/>
    </div>

  )
}
export default MainPage;
