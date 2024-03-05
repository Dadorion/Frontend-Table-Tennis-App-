import React from 'react'

import s from './Preloader.module.css'

function Preloader_ball(props) {
  return (
    <div className={`${s.Preloader}`}>
      <div className={`${s.pl}`}>
        <div className={`${s.pl__outer_ring}`} />
        <div className={`${s.pl__inner_ring}`} />
        <div className={`${s.pl__track_cover}`} />
        <div className={`${s.pl__ball}`}>
          <div className={`${s.pl__ball_texture}`} />
          <div className={`${s.pl__ball_outer_shadow}`} />
          <div className={`${s.pl__ball_inner_shadow}`} />
          <div className={`${s.pl__ball_side_shadows}`} />
        </div>
      </div>
    </div>
  )
}
export default Preloader_ball
