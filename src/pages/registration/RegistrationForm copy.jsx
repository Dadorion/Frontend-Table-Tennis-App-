import React, { useState } from 'react';
import s from './Registration.module.css';
import sFC from '../../UI/FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/validators';
import Input from '../../UI/FormControls/FormControls';
import { ReactComponent as ArrowIcon } from '../../icons/Back.svg'
import Button from '../../UI/Button/Button';

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

//    -/ ___|___ \-

function RegistrationForm(props) {
  const [isFirstScreen, setIsFirstScreen] = useState(true)
  const [isFirstScreenDataComplete, setIsFirstScreenDataComplete] = useState(false)
  const [firstScreenData, setFirstScreenData] = useState({
    name: '',
    surname: '',
    birthday: '',
    city: ''
  })

  const checkIsFirstScreenDataComplete = (data) => {
    const isComplete = Object.values(data).every((value) => !!value);
    setIsFirstScreenDataComplete(isComplete)
  }

  const handleNameChange = (e) => {
    setFirstScreenData((firstScreenData) => ({
      ...firstScreenData,
      name: e.target.value,
    }))
    checkIsFirstScreenDataComplete(firstScreenData);
  }
  const handleSurNameChange = (e) => {
    setFirstScreenData((firstScreenData) => ({
      ...firstScreenData,
      surname: e.target.value,
    }))
    checkIsFirstScreenDataComplete(firstScreenData);
  }
  const handleBirthdayChange = (e) => {
    setFirstScreenData((firstScreenData) => ({
      ...firstScreenData,
      birthday: e.target.value,
    }))
    checkIsFirstScreenDataComplete(firstScreenData);
  }
  const handleCityChange = (e) => {
    setFirstScreenData((firstScreenData) => ({
      ...firstScreenData,
      city: e.target.value,
    }))
    checkIsFirstScreenDataComplete(firstScreenData);
  }


  const handleNextClick = () => { setIsFirstScreen(false) };
  const handleBackClick = () => { setIsFirstScreen(true) }

  return (
    <div className={s.FormContainer}>
      <div className={s.funcHeader} onClick={handleBackClick}>
        {!isFirstScreen && <div className={s.arrowIcon}><ArrowIcon /></div>}
      </div>

      <form
        className={s.RegistrationForm}
        onSubmit={props.handleSubmit}
      >
        <div>
          {isFirstScreen && (
            <>
              <div>
                <Field
                  onChange={handleNameChange}
                  className={s.InputForm}
                  name='name'
                  placeholder='Имя'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  onChange={handleSurNameChange}
                  className={s.InputForm}
                  name='surname'
                  placeholder='Фамилия'
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  onChange={handleBirthdayChange}
                  className={s.InputForm}
                  name='birthday'
                  placeholder='Дата рождения'
                  type="date"
                  component={Input}
                  validate={[required, maxLength30]} />
              </div>
              <div >
                <Field
                  onChange={handleCityChange}
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
          <Button
            buttName='Далее'
            isDisabled={!isFirstScreenDataComplete}
            handleNextClick={handleNextClick} />
        ) : (
          <button type="submit">Зарегистрироваться</button>
          // <Button
          //   buttName='Зарегистрироваться'
          //   type="submit"
          // />
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
  form: 'registration' //a unique name for the form
})(RegistrationForm)

export default RegistrationReduxForm;
