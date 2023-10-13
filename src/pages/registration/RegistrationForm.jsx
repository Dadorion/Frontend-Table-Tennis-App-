import React, { useState } from 'react';
import s from './Registration.module.css';
import sFC from '../../UI/FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/valdators/validators';
import Input from '../../UI/FormControls/FormControls';
import { ReactComponent as ArrowIcon } from '../../icons/Back.svg'

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

function RegistrationForm(props) {
  let [isFirstScreen, setIsFirstScreen] = useState(true);

  const handleNextClick = () => {
    setIsFirstScreen(false);
  };

  const handleBackClick = () => {
    setIsFirstScreen(true);
  };
  // isFirstScreen = true

  return (
    <div className={s.RegistrationFormContainer}>
      <div className={s.funcHeader} onClick={handleBackClick}>
        {
          !isFirstScreen
            ? <div className={s.arrowIcon}><ArrowIcon /></div>
            : null
        }
      </div>

      <form className={s.RegistrationForm} onSubmit={props.handleSubmit}>
        <div>
          {isFirstScreen && (
            <>
              <div>
                <Field
                  className={s.InputForm}
                  name='name'
                  placeholder='Имя'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  className={s.InputForm}
                  name='surname'
                  placeholder='Фамилия'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  className={s.InputForm}
                  name='birthday'
                  placeholder='Дата рождения'
                  type="date"
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  className={s.InputForm}
                  name='city'
                  placeholder='Город'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
            </>
          )}

          {!isFirstScreen && (
            <>
              <div>
                <Field
                  className={s.InputForm}
                  name='email'
                  placeholder='Емайл'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  className={s.InputForm}
                  name='password'
                  placeholder='Пароль'
                  // DD2_aadm9mRxNrC
                  type="password"
                  component={Input}
                  validate={[required, minLength4]} />
              </div>
              <div >
                <Field
                  className={s.InputForm}
                  name='password'
                  placeholder='Пароль еще раз'
                  // DD2_aadm9mRxNrC
                  type="password"
                  component={Input}
                  validate={[required, minLength4]} />
              </div>
              <div className={s.checkboxRemember}>
                <Field
                  name='rememberMe'
                  type="checkbox"
                  component={'input'} />

                <div className={s.textLink}>
                  <div>Я принимаю условия</div>

                  <a href="/">Пользовательского соглашения</a>
                </div>

              </div>
            </>
          )}
        </div>

        <div className={s.ScreenIndicators}>
          <div className={`${s.Indicator} ${isFirstScreen ? s.Active : ''}`}></div>
          <div className={`${s.Indicator} ${!isFirstScreen ? s.Active : ''}`}></div>
        </div>

        <div>
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
        </div>


        <div>
          {props.error && <div className={sFC.formSummaryError}>
            {props.error}
          </div>}
        </div>

      </form >

      <div className={s.ButtonFormBlock}>
        {isFirstScreen ? (
          <div className={s.ButtonForm}>
            <button disabled={props.invalid} onClick={handleNextClick}>
              Далее
            </button>
          </div>
        ) : (
          <div className={s.ButtonForm}>
            <button type="submit">Зарегистрироваться</button>
          </div>
        )}

        <div className={s.hasAkkaunt}>
          Уже есть аккаунт?
          <a href="/">Войти</a>
        </div>
      </div>
    </div >
  )
}

export const isFirstScreen = () => {
  return isFirstScreen;
};

const RegistrationReduxForm = reduxForm({
  //a unique name for the form
  form: 'registration'
})(RegistrationForm)

export default RegistrationReduxForm;
