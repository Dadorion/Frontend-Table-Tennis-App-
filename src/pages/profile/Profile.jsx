import React from 'react';
import s from './Profile.module.css';
import pro_face from '../../icons/1c6o_vj2k_211112.jpg';

function Profile(props) {

  return (
    <div className={`${s.Profile}`}>
      <h1>Anton Babenko</h1>
      <div className={`${s.face}`}>
        <img src={pro_face} alt="profile_face" />
      </div>
      <h4>Rating</h4>
      <h2>262</h2>

    </div>

  )
}
export default Profile;
