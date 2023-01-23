import React from 'react';
import s from './ProfileInfo.module.css';
import pro_face from '../../../icons/profile.png';
import ProfileStatus from '../../../UI/ProfileStatus/ProfileStatus';

function ProfileInfo(props) {
  

  return (
    <div className={`${s.ProfileInfo}`}>
      <div className={`${s.P_Line}`}>

        <div>
          <h4>Total Games</h4>
          <h2>1538</h2>
        </div>

        <div className={`${s.face}`}>
          <img src={props.profile.photos.small != null ? props.profile.photos.small : pro_face} alt="profile_face" />
        </div>

        <div>
          <h4>Rating</h4>
          <h2>{props.profile.userId}</h2>
        </div>

      </div>
      <div>
        <h1>{props.profile.fullName}</h1>
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>

  )
}
export default ProfileInfo;
