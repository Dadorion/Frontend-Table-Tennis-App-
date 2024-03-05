import React from 'react'
import { Field, reduxForm } from 'redux-form'

function HomepageTestForm(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name='testName' component='input' type='text' placeholder='test input text' />
      <br />
      <br />
      <button type='submit'>Click for test</button>
    </form>
  )
}

const HomepageTestReduxForm = reduxForm({
  form: 'test_form',
})(HomepageTestForm)

export default HomepageTestReduxForm
