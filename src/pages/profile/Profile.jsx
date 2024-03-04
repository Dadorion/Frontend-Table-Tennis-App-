import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Profile.module.css'
// import ProfileInfo from './profile_info/ProfileInfo';
// import PreloaderBall from '../../UI/preloader/PreloaderBall';
import EquipmentInfo from './section/equipmentInfo/equipmentInfo'
import MainInfo from './section/mainInfo/mainInfo'
import PersonalInfo from './section/personalInfo/personalInfo'

import { logoutTC } from '../../redux/auth-reducer'
import { getProfile } from '../../redux/profile-reducer'
import CustomButton from '../../UI/Buttons/CustomButton/CustomButton'
import ChangePasswordPopup from '../../UI/ChangePassword_popup/ChangePassword_popup'
import ConfirmPopUp from '../../UI/Confirm_popup/Confirm_popup'
import Header from '../../UI/header/header'

function Profile(props) {
  // if (!props.profile) {
  //   return <div className={`${s.Preloader}`}>
  //     <div className={`${s.msg}`}>I have no User profile</div>
  //     <div className={`${s.preloaderBall}`}>
  //       <PreloaderBall />
  //     </div>
  //   </div>
  // }
  const dispatch = useDispatch()
  const [exitQuest, setExitQuest] = useState(false)
  const [changePassQuest, setChangePassQuest] = useState(false)

  const profile = useSelector((state) => state.profileReducer.profile)
  const newProfileData = useSelector((state) => state.profileReducer.newProfileData)

  const handleExit = () => {
    // setExitQuest(!exitQuest);
    window.alert('hop')
  }
  const handleChangePass = () => {
    setChangePassQuest(!changePassQuest)
  }

  useEffect(() => {
    // Выполняем запрос профиля при монтировании компонента
    dispatch(getProfile())
  }, [dispatch])

  if (!profile) {
    return <div>Загрузка...</div>
  }
  const avatar = profile.photo_path
  const avatarPath = `http://localhost:5000/${avatar}`

  return (
    <div className={`${s.Profile}`}>
      <div className={`${s.headerContainer}`}>
        <Header headName='Мой профиль' edit={'/edit-my-profile'} />

        <MainInfo
          avatar={avatarPath}
          name={profile && profile.name}
          surname={profile && profile.surname}
          status={newProfileData ? newProfileData.status : profile.status}
        />
      </div>

      <div className={`${s.contentContainer}`}>
        <PersonalInfo
          city={profile && profile.city}
          region={profile && profile.region}
          birthday={profile && profile.birthday}
          percentOfWin={profile && profile.percentOfWin}
        />
        <EquipmentInfo
          base={profile && profile.base}
          forehand_pad={profile && profile.forehand_pad}
          backhand_pad={profile && profile.backhand_pad}
        />
        <div className={s.manageBlock}>
          <h3>Настройки</h3>
          <CustomButton btnName={'Сообщить об ошибке'} handler={handleExit} />
          <CustomButton btnName={'Сменить пароль'} handler={handleChangePass} />
          <CustomButton btnName={'Выйти из профиля'} handler={handleExit} />
        </div>

        <ConfirmPopUp quest={exitQuest} setQuest={setExitQuest} TC={logoutTC} />
        <ChangePasswordPopup
          quest={changePassQuest}
          setQuest={setChangePassQuest}
          newPasswordData={props.newPasswordData}
        />
      </div>
    </div>
  )
}
export default Profile
