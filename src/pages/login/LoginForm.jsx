import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import sL from './Login.module.css';
import Button from '../../UI/Buttons/Button/Button';
import Input from '../../UI/FormControls/FormControls';
import sFC from '../../UI/FormControls/FormControls.module.css';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

function LoginForm({someProp, handleSubmit, error}) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  console.log('someProp changed:', someProp);

  return (
    <div className={sL.LoginForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            className={sL.InputForm}
            name='email'
            placeholder='Емайл'
            component={Input}
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field
            className={sL.InputForm}
            name='password'
            placeholder='Пароль'
            type='password'
            component={Input}
            validate={[required, minLength4]}
          />
        </div>
        <div className={sL.underInputs}>
          <div className={sL.checkboxRemember}>
            <Field
              name='rememberMe'
              type='checkbox'
              value='true'
              component={Input}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />{' '}
            Запомнить меня
          </div>
          <a href='/recovery_password'> Забыли пароль? </a>
        </div>

        {error && <div className={sFC.formSummaryError}>{error}</div>}
        <div>
          <Button buttName='Войти' />
          <div>
            Нет аккаунта? <a href='/registration'> Зарегистрироваться </a>
          </div>
        </div>
      </form>
    </div>
  );
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginReduxForm;
