import React from 'react';
import sL from './Login.module.css';
import sFC from '../../UI/FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/valdators/validators';
import Input from '../../UI/FormControls/FormControls';

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

function LoginForm(props) {
  return (
    <div className={sL.LoginForm}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name='email'
            placeholder='Email'
            component={Input}
            validate={[required, maxLength30]} />
        </div>
        <div>
          <Field
            name='password'
            placeholder='Password DD2_aadm9mRxNrC'
            type="password"
            component={Input}
            validate={[required, minLength4]} />
        </div>
        <div>
          <Field
            name='rememberMe'
            type="checkbox"
            component={'input'} /> remember me
        </div>
        {props.error && <div className={sFC.formSummaryError}>
          {props.error}
        </div>}
        <div>
          <button>Log In</button>
        </div>
      </form>

    </div>
  )
}


const LoginReduxForm = reduxForm({
  //a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginReduxForm;
