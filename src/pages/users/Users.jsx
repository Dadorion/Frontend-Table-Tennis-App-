import React from 'react';
import s from './Users.module.css';
import pro_face from '../../icons/profile.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../../UI/Paginator/Paginator';



function Users(props) {

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }
  return (
    <div className={`${s.Users}`}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {
        props.users.map(u =>
          <div key={u.id}>

            <NavLink to={'/profile/' + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : pro_face}
                alt="ava" />
            </NavLink>

            {/* {`${u.name} ${'u.surname'} rat - ${'u.locRating'} `} */}
            {`${u.name}`}
            <div>
              {u.followed
                ? <button
                  disabled={props.followingInProgress
                    .some(id => id === u.id)}
                  onClick={() => { props.unfollow(u.id) }}>
                  Unfollow
                </button>

                : <button
                  disabled={props.followingInProgress
                    .some(id => id === u.id)}
                  onClick={() => { props.follow(u.id) }}>
                  Follow
                </button>
              }
            </div>
          </div>
        )}
    </div>
  )
}


export default Users;