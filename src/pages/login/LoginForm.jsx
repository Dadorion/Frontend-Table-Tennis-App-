import React, { useState } from 'react';
import sL from './Login.module.css';
import sFC from '../../UI/FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/valdators/validators';
import Input from '../../UI/FormControls/FormControls';

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

function LoginForm(props) {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={sL.LoginForm}>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            className={sL.InputForm}
            name='email'
            placeholder='Емайл'
            component={Input}
            validate={[required, maxLength30]} />
        </div>
        <div >
          <Field
            className={sL.InputForm}
            name='password'
            placeholder='Пароль'
            // DD2_aadm9mRxNrC
            type="password"
            component={Input}
            validate={[required, minLength4]} />
        </div>
        <div className={sL.underInputs}>
          <div className={sL.checkboxRemember}>
            <Field
              name='rememberMe'
              type="checkbox"
              value="true"
              component={'input'}
              checked={isChecked}
              onChange={handleCheckboxChange}
            /> Запомнить меня
          </div>
          <a href="/"> Забыли пароль? </a>
        </div>



        {
          props.captchaUrl
          &&
          <>
            <img src={props.captchaUrl} alt="captcha Img" />
            <Field
              name='captcha'
              placeholder='Simbols from image'
              component={Input}
              validate={[required]} />
          </>
        }


        {props.error && <div className={sFC.formSummaryError}>
          {props.error}
        </div>}
        <div className={sL.ButtonForm}>
          <div >
            <button >Войти</button>
          </div>
          <div>
            Нет аккаунта? <a href="/"> Зарегистрироваться </a>
          </div>
        </div>
      </form>

    </div>
  )
}


const LoginReduxForm = reduxForm({
  //an unique name for the form
  form: 'login'
})(LoginForm)

export default LoginReduxForm;
