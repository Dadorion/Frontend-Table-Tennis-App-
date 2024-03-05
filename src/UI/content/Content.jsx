import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import s from './Content.module.css'

import AddMatch from '../../pages/add_match/AddMatch'
import HistoryContainer from '../../pages/history/HistoryContainer'
import HomePageContainer from '../../pages/home_page/HomePageContainer'
import Login from '../../pages/login/LoginContainer'
import UsersContainer from '../../pages/players/PlayersContainer'
import AvatarEditor from '../../pages/profile/avatar_editor/avatar_editor'
import EditInfoContainer from '../../pages/profile/edit_info/EditInfoContainer'
import ProfileContainer from '../../pages/profile/ProfileContainer'
import Registration from '../../pages/registration/RegistrationContainer'
import Tabbar from '../Tabbar/Tabbar'

// UsersContainer = React.lazy(() => import('../../pages/users/UsersContainer'));

function Content(props) {
  const location = useLocation()
  const showTabbar = (path) => {
    const blockArr = ['/edit-my-profile', '/edit-photo']
    return blockArr.includes(path)
  }

  return (
    <div className={!showTabbar(location.pathname) ? s.ContentWithTabbar : s.ContentWithoutTabbar}>
      <Routes>
        <Route path='/' element={<HomePageContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/edit-my-profile' element={<EditInfoContainer />} />
        <Route path='/edit-photo' element={<AvatarEditor />} />
        <Route
          path='/users'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <UsersContainer />
            </Suspense>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/add_match' element={<AddMatch />} />
        <Route path='/history' element={<HistoryContainer />} />
      </Routes>
      <Tabbar />
    </div>
  )
}
export default Content
