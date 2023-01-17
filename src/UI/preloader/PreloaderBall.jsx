import React from 'react';
import s from './Preloader.module.css';

function Preloader_ball(props) {
   return (
      <div className={`${s.Preloader}`}>
         <div class={`${s.pl}`}>
            <div class={`${s.pl__outer_ring}`}></div>
            <div class={`${s.pl__inner_ring}`}></div>
            <div class={`${s.pl__track_cover}`}></div>
            <div class={`${s.pl__ball}`}>
               <div class={`${s.pl__ball_texture}`}></div>
               <div class={`${s.pl__ball_outer_shadow}`}></div>
               <div class={`${s.pl__ball_inner_shadow}`}></div>
               <div class={`${s.pl__ball_side_shadows}`}></div>
            </div>
         </div>
      </div>)
}
export default Preloader_ball;