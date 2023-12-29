import React, { useState, useEffect } from "react";
import s from "./EditInfo.module.css";
import exit from "../../../icons/svg/exit.svg";
import airplane from "../../../icons/svg/airplane.svg";
import MainInfo from "../section/mainInfo/mainInfo";
import PersonalInfo from "../section/personalInfo/personalInfo";
import EquipmentInfo from "../section/equipmentInfo/equipmentInfo";
import ConfirmPopUp from "../../../UI/Confirm_popup/Confirm_popup";
import { getProfile } from "../../../redux/profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../UI/header/header";
import { saveNewProfile } from "../../../redux/profile-reducer";
import { useNavigate } from "react-router-dom";

function EditInfo(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [saveQwest, setSaveQwest] = useState(false);
  const [dispatchQwest, setDispatchQwest] = useState(false);

  const profile = useSelector((state) => state.profileReducer.profile);
  const newProfileData = useSelector(
    (state) => state.profileReducer.newProfileData
  );

  if(dispatchQwest) {
    dispatch(saveNewProfile(newProfileData));
    navigate("/profile");
  }

  const handleSave = () => {
    console.log("dispatch в стейт и БД");
    setSaveQwest(!saveQwest)
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
    <div className={`${s.EditInfo}`}>
      <div className={`${s.headerContainer}`}>
        <Header headName="Редактировать" right={"/profile"} />

        <MainInfo
          avatar={avatarPath}
          name={profile && profile.name}
          surname={profile && profile.surname}
        />
      </div>

      <div className={`${s.contentContainer}`}>
        <PersonalInfo
          city={
            props.newProfileData.city !== ""
              ? props.newProfileData.city
              : props.profile.city
          }
          region={
            props.newProfileData.region !== ""
              ? props.newProfileData.region
              : props.profile.region
          }
          birthday={
            props.newProfileData.birthday !== ""
              ? props.newProfileData.birthday
              : props.profile.birthday
          }
          percentOfWin={props.profile.percentOfWin}
        />
        <EquipmentInfo
          base={
            props.newProfileData.base !== ""
              ? props.newProfileData.base
              : props.profile.base
          }
          forhand_pad={
            props.newProfileData.forhand_pad !== ""
              ? props.newProfileData.forhand_pad
              : props.profile.forhand_pad
          }
          backhand_pad={
            props.newProfileData.backhand_pad !== ""
              ? props.newProfileData.backhand_pad
              : props.profile.backhand_pad
          }
        />
        <div className={s.manageBlock}>
          <div className={s.exitButton} onClick={handleSave}>
            <img src={exit} alt="exit" />
            Сохранить
          </div>

          <div className={s.bugReport}>
            <img src={airplane} alt="exit" />
            {/*TODO прописать на бэке и добавить таблицу в БД  */}
            <span>Сообщить об ошибке</span>
          </div>
        </div>

        <ConfirmPopUp
          saveQwest={saveQwest}
          setSaveQwest={setSaveQwest}
          dispatchQwest={dispatchQwest}
          setDispatchQwest={setDispatchQwest}
        />
      </div>
    </div>
  );
}
export default EditInfo;
