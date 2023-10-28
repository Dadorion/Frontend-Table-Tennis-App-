import { registrationAPI } from "../api/api";
// import { stopSubmit } from "redux-form";

// -------------= preparing constatnt =--------------
let initialState = {
   name: null,
   surname: null,
   city: null,
   birthday: null,
   email: null
}

const REGISTRATION = 'ttsh/auth/REGISTRATION';

export function setRegistrationUserData(name, surname, city, birthday, email) {
   return { type: REGISTRATION, payload: { name, surname, city, birthday, email } }
}

export function registrationTC(formData) {
   return async (dispatch) => {
      const responce = await registrationAPI.registration(formData)
      console.log(responce)

      if (responce.status !== 200) { console.log('Ошибка: Ответ от сервера не пришел.') }
      console.log(responce.data.message)

      // const { name, surname, city, birthday, email } = responce
      // dispatch(setRegistrationUserData(name, surname, city, birthday, email))

      // ответ сервера ожидается таким:
      // {
      //    user: { id: 1004 },
      //    player: {
      //      id: 2486,
      //      name: 'Test3',
      //      surname: 'Test3',
      //      birthday: 1985-05-24T19:00:00.000Z,
      //      status: null,
      //      city: 'Test3',
      //      user_id: 1004,
      //      base: null,
      //      forhand_pad: null,
      //      backhand_pad: null
      //    }
      //  }
   }
}

// registrationThunkCreator ->
export const getRegistrationUserData = () => async (dispatch) => {

   const responce = await registrationAPI.registration();

   if (responce.data.resultCode === 0) {
      const { name, surname, city, birthday, email, password } = responce.data.data;
      dispatch(setRegistrationUserData(name, surname, city, birthday, email, password))
   }

}

// //registrationThunkCreator ->
// export const registration = (email, password, rememberMe, captcha) => async (dispatch) => {
//    const responce = await registrationAPI.login(email, password, rememberMe, captcha);
//    if (responce.data.resultCode === 0) {
//       dispatch(setRegistrationUserData())
//    } else {
//       if (responce.data.resultCode === 10) {
//          dispatch(setRegistrationUserData());
//       }
//       const message = responce.data.messages.length > 0
//          ? responce.data.messages[0]
//          : "Something went wrong. Please change your email or password and try again."
//       dispatch(
//          stopSubmit("login", { _error: message })
//       );
//    }
// }

// -------------= reduser =--------------------------
function registrationReducer(state = initialState, action) {

   switch (action.type) {
      case REGISTRATION:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   };
}

export default registrationReducer;