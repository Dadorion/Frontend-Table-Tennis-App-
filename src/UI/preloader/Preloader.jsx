import React from 'react'

import s from './Preloader.module.css'

import preloader from '../../icons/ZZ5H.gif'

function Preloader(props) {
  return (
    <div className={`${s.Preloader}`}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}
export default Preloader
