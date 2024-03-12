import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import s from './EditInfo.module.css'

import { getProfile, saveNewProfile } from '../../../redux/profile-reducer'

import ConfirmPopUp from '../../../UI/Confirm_popup/Confirm_popup'
import Header from '../../../UI/header/header'
import EquipmentInfo from '../section/equipmentInfo/equipmentInfo'
import MainInfo from '../section/mainInfo/mainInfo'
import PersonalInfo from '../section/personalInfo/personalInfo'

function EditInfo({newProfileData, profile}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [saveQuest, setSaveQuest] = useState(false)
  const [dispatchQuest, setDispatchQuest] = useState(false)

  const profileSelector = useSelector((state) => state.profileReducer.profile)
  // const newProfileData = useSelector((state) => state.profileReducer.newProfileData)

  if (dispatchQuest) {
    dispatch(saveNewProfile(newProfileData))
    navigate('/profile')
  }

  const handleSave = () => {
    console.log('dispatch в стейт и БД')
    setSaveQuest(!saveQuest)
  }

  useEffect(() => {
    // Выполняем запрос профиля при монтировании компонента
    dispatch(getProfile())
  }, [dispatch])

  if (!profileSelector) {
    return <div>Загрузка...</div>
  }
  const avatar = profileSelector.photo_path
  const avatarPath = `http://localhost:5000/${avatar}`

  return (
    <div className={`${s.EditInfo}`}>
      <div className={`${s.headerContainer}`}>
        <Header headName='Редактировать' exit='/profile' confirm={handleSave} />

        <MainInfo avatar={avatarPath} name={profile && profile.name} surname={profile && profile.surname} />
      </div>

      <div className={`${s.contentContainer}`}>
        <PersonalInfo
          city={newProfileData.city !== '' ? newProfileData.city : profile.city}
          region={newProfileData.region !== '' ? newProfileData.region : profile.region}
          birthday={newProfileData.birthday !== '' ? newProfileData.birthday : profile.birthday}
          percentOfWin={profile.percentOfWin}
        />
        <EquipmentInfo
          base={newProfileData.base !== '' ? newProfileData.base : profile.base}
          forehandPad={
            newProfileData.forehandPad !== '' ? newProfileData.forehandPad : profile.forehandPad
          }
          backhand_pad={
            newProfileData.backhand_pad !== '' ? newProfileData.backhand_pad : profile.backhand_pad
          }
        />

        <ConfirmPopUp
          saveQuest={saveQuest}
          setSaveQuest={setSaveQuest}
          dispatchQuest={dispatchQuest}
          setDispatchQuest={setDispatchQuest}
        />
      </div>
    </div>
  )
}
export default EditInfo
