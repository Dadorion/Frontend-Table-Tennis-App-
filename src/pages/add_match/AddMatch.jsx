import React from 'react'
import { connect } from 'react-redux'

import s from './AddMatch.module.css'

import Counter from '../../UI/Counter/Counter'
import Tabbar from '../../UI/Tabbar/Tabbar'

function AddMatch(props) {
  // const onSubmit = (formData) => {
  //   props.registrationTC(formData)
  // }

  return (
    <div className={s.AddMatch}>
      <h1>Записать счет</h1>
      <Counter />
      <div className={s.btn}>Сохранить</div>
      <Tabbar />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  }
}

export default connect(mapStateToProps, {})(AddMatch)
