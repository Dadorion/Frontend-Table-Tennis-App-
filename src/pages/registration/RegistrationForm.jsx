import React, { useState } from "react"
import { Field, reduxForm } from "redux-form"
import {
   required,
   maxLengthCreator,
   minLengthCreator,
} from "../../utils/validators/validators"
import Input from "../../UI/FormControls/FormControls"
import { ReactComponent as ArrowIcon } from "../../icons/Back.svg"
import Button from "../../UI/Buttons/Button/Button";
import s from "./Registration.module.css"
import sFC from "../../UI/FormControls/FormControls.module.css"

const maxLength30 = maxLengthCreator(30)
const minLength4 = minLengthCreator(4)

const RegistrationForm = (props) => {
   const [isFirstScreen, setIsFirstScreen] = useState(true)

   const handleNextClick = () => {
      setIsFirstScreen(false)
   }
   const handleBackClick = () => {
      setIsFirstScreen(true)
   }

   return (
      <div className={s.FormContainer}>
         <div className={s.funcHeader} onClick={handleBackClick}>
            {!isFirstScreen && (
               <div className={s.arrowIcon}>
                  <ArrowIcon />
               </div>
            )}
         </div>

         <form className={s.RegistrationForm} onSubmit={props.handleSubmit}>
            <div>
               {isFirstScreen ? (
                  <>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="name"
                           placeholder="Имя"
                           component={Input}
                           validate={[required, maxLength30]}
                        />
                     </div>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="surname"
                           placeholder="Фамилия"
                           component={Input}
                           validate={[required, maxLength30]}
                        />
                     </div>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="birthday"
                           placeholder="Дата рождения"
                           type="date"
                           component={Input}
                           validate={[required, maxLength30]}
                        />
                     </div>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="city"
                           placeholder="Город"
                           component={Input}
                           validate={[required, maxLength30]}
                        />
                     </div>
                  </>
               ) : (
                  <>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="email"
                           placeholder="Емайл"
                           component={Input}
                           validate={[required, maxLength30]}
                        />
                     </div>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="password_1"
                           placeholder="Пароль"
                           type="password"
                           component={Input}
                           validate={[required, minLength4]}
                        />
                     </div>
                     <div>
                        <Field
                           className={s.InputForm}
                           name="password_2"
                           placeholder="Пароль еще раз"
                           type="password"
                           component={Input}
                           validate={[required, minLength4]}
                        />
                     </div>
                     {/* <div className={s.checkboxRemember}>
                <Field
                  name='agreement'
                  type="checkbox"
                  component={'input'}
                />
                <div className={s.textLink}>
                  <div>Я принимаю условия</div>
                  <a href="/">Пользовательского соглашения</a>
                </div>
              </div> */}
                  </>
               )}
            </div>

            <div className={s.ScreenIndicators}>
               <div
                  className={`${s.Indicator} ${isFirstScreen ? s.Active : ""}`}
               ></div>
               <div
                  className={`${s.Indicator} ${!isFirstScreen ? s.Active : ""}`}
               ></div>
            </div>

            <div>
               {props.error && (
                  <div className={sFC.formSummaryError}>{props.error}</div>
               )}
            </div>

            <div className={s.ButtonFormBlock}>
               {isFirstScreen ? (
                  // FIXME кнопка работает корректно один раз вперед, стрелка назад тоже отрабатывает. Но после возвращения кнопка дизейблится и уже ни как не разблокируется.
                  <Button
                     buttName="Далее"
                     isDisabled={!props.valid}
                     onClick={handleNextClick}
                  />
               ) : (
                  // <button type="submit" disabled={!props.valid} onClick={handleNextClick}>Зарегистрироваться</button>
                  <Button buttName="Зарегистрироваться" />
               )}
               <div className={s.hasAkkaunt}></div>
            </div>
         </form>
      </div>
   )
}

const RegistrationReduxForm = reduxForm({
   form: "registration",
})(RegistrationForm)

export default RegistrationReduxForm
