import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './profile_info/ProfileInfo';
import PreloaderBall from '../../UI/preloader/PreloaderBall';

function Profile(props) {
  if (!props.profile) {
    return <div className={`${s.Preloader}`}>
      <div className={`${s.msg}`}>I have no User profile</div>
      <div className={`${s.preloaderBall}`}>
        <PreloaderBall />
      </div>
    </div>
  }

  return (
    <div className={`${s.Profile}`}>
      <ProfileInfo 
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus} />
      
    </div>

  )
}
export default Profile;
