import React from 'react';
import s from './Profile.module.css';
import pro_face from '../../icons/1c6o_vj2k_211112.jpg';
// import Preloader from '../../UI/preloader/Preloader';
import PreloaderBall from '../../UI/preloader/PreloaderBall';

function Profile(props) {
  if (!props.profile) {
    return <><div>I have no User profile<div className={`${s.preloader}`}> <PreloaderBall /></div></div></>
  }

  return (
    <div className={`${s.Profile}`}>
      <h1>{props.profile.fullName}</h1>
      <div className={`${s.face}`}>
        <img src={props.profile.photos.small != null ? props.profile.photos.small : pro_face} alt="profile_face" />
      </div>
      <h4>Rating</h4>
      <h2>{props.profile.userId}</h2>

    </div>

  )
}
export default Profile;
