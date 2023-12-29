import React, { useState, useEffect } from "react";
import s from "./Profile.module.css";
// import ProfileInfo from './profile_info/ProfileInfo';
// import PreloaderBall from '../../UI/preloader/PreloaderBall';
import exit from "../../icons/svg/exit.svg";
import airplane from "../../icons/svg/airplane.svg";
import MainInfo from "./section/mainInfo/mainInfo";
import PersonalInfo from "./section/personalInfo/personalInfo";
import EquipmentInfo from "./section/equipmentInfo/equipmentInfo";
import ConfirmPopUp from "../../UI/Confirm_popup/Confirm_popup";
import { getProfile } from "../../redux/profile-reducer";
import { logoutTC } from "../../redux/auth-reduser";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../UI/header/header";

function Profile(props) {
  // if (!props.profile) {
  //   return <div className={`${s.Preloader}`}>
  //     <div className={`${s.msg}`}>I have no User profile</div>
  //     <div className={`${s.preloaderBall}`}>
  //       <PreloaderBall />
  //     </div>
  //   </div>
  // }
  const dispatch = useDispatch();
  const [exitQwest, setExitQwest] = useState(false);

  const profile = useSelector((state) => state.profileReducer.profile);
  const newProfileData = useSelector(
    (state) => state.profileReducer.newProfileData
  );

  const handleExit = () => {
    setExitQwest(!exitQwest);
  };

  useEffect(() => {
    // Выполняем запрос профиля при монтировании компонента
    dispatch(getProfile());
  }, [dispatch]);

  if (!profile) {
    return <div>Загрузка...</div>;
  }
  const avatar = profile.photo_path
  const avatarPath = `http://localhost:5000/${avatar}`

  return (
    <div className={`${s.Profile}`}>
      <div className={`${s.headerContainer}`}>
        <Header headName="Мой профиль" left={"/edit-my-profile"} right={"/"} />

        <MainInfo
          avatar={avatarPath}
          name={profile && profile.name}
          surname={profile && profile.surname}
          status={
            newProfileData  ? newProfileData.status : profile.status
          }
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
          forhand_pad={profile && profile.forhand_pad}
          backhand_pad={profile && profile.backhand_pad}
        />
        <div className={s.manageBlock}>
          <div className={s.exitButton} onClick={handleExit}>
            <img src={exit} alt="exit" />
            Выйти из профиля
          </div>

          <div className={s.bugReport}>
            <img src={airplane} alt="exit" />
            {/*TODO прописать на бэке и добавить таблицу в БД  */}
            <span>Сообщить об ошибке</span>
          </div>
        </div>

        <ConfirmPopUp qwest={exitQwest} setQwest={setExitQwest} TC={logoutTC} />
      </div>
    </div>
  );
}
export default Profile;
