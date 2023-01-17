import React from 'react';
import s from './Users.module.css';
import pro_face from '../../icons/profile.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



function Users(props) {

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }

  return (
    <div className={`${s.Users}`}>
      <div>
        {
          pages.map(p => {
            return (
              <span
                key={p}
                className={props.currentPage === p
                  ? s.selectedPage
                  : undefined}
                onClick={(e) => { props.onPageChanged(p); }}>

                {p}
              </span>)
          })
        }
      </div>
      {
        props.users.map(u =>
          <div key={u.id}>

            <NavLink to={'/profile/' + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : pro_face}
                alt="ava" />
            </NavLink>

            {`${u.name} ${'u.surname'} rat - ${'u.locRating'} `}
            <div>
              {u.followed
                ? <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => { 
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "8fb233dd-cf30-4a1d-ae9b-c52215385e11"
                          }
                        })
                      .then(responce => {
                        if (responce.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}>Unfollow</button>

                : <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "8fb233dd-cf30-4a1d-ae9b-c52215385e11"
                          }
                        })
                      .then(responce => {
                        if (responce.data.resultCode === 0) {
                          props.unfollow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });


                  }}>Follow</button>
              }
            </div>
          </div>
        )}
    </div>
  )
}


export default Users;