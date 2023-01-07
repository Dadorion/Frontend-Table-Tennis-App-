import React from 'react';
import s from './Users.module.css';

function Users(props) {
  let allUsers = props.users.map(u => <div>{u.name}</div>)
  return (
    <div className={`${s.Users}`}>
      { allUsers }
    </div>
  )
}
export default Users;
