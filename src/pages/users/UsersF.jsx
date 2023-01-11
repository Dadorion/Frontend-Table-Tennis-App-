import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import pro_face from '../../icons/profile.png';

function Users(props) {
function getUsers() {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(responce => {
        // debugger;
        props.setUsers(responce.data.items);
      });
  }
}
  

  return (
    <div className={`${s.Users}`}>
      <button onClick={getUsers}>Get users</button>
      {
        props.users.map(u =>
          <div key={u.id}>
            <img 
            src={u.photos.small != null ? u.photos.small : pro_face} 
            alt="ava" />
            {`${u.name} ${'u.surname'} rat - ${'u.locRating'} `}
            <div>
              {
                u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                  : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
              }
            </div>

          </div>
        )}
    </div>
  )
}
export default Users;
