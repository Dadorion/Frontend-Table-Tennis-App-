import React from 'react';
import s from './ProfileInfo.module.css';
import pro_face from '../../../icons/profile.png';
import ProfileStatusWithHooks from '../../../UI/ProfileStatus/ProfileStatusWithHooks';
import LastGamesContainer from '../../../UI/LastGames/LastGamesContainer';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, store, savePhoto }) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }
  return (
    <div className={`${s.ProfileInfo}`}>
      <div className={`${s.P_Line}`}>

        <div>
          <h4>Total Games</h4>
          <h2>1538</h2>
        </div>

        <div className={`${s.face}`}>
          {/* <img src={props.profile.photos.small != null ? props.profile.photos.small : pro_face} alt="profile_face" /> */}
          <img src={profile.photos.large || pro_face} alt="profile_face" />
        </div>

        <div>
          <h4>Rating</h4>
          <h2>{profile.userId}</h2>
        </div>

      </div>
      <div>
        {
          isOwner
          &&
          <input type="file" onChange={onMainPhotoSelected} />
        }
      </div>
      <div>
        <h1>{profile.fullName}</h1>
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={`${s.my_games}`}>
        <h4>My Games</h4>
        <LastGamesContainer store={store} />
      </div>
    </div>

  )
}

export default ProfileInfo;
