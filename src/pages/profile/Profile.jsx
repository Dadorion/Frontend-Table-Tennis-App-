import React from 'react';
import s from './Profile.module.css';
import pro_face from '../../icons/profile.png';
import PreloaderBall from '../../UI/preloader/PreloaderBall';
import { Navigate } from 'react-router-dom';

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
