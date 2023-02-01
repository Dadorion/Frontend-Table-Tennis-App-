import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};
function authReducer(state = initialState, action) {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   };
}

export function setAuthUserData(userId, email, login, isAuth) {
   return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
}

//authThunkCreator ->
export function getAuthUserData() {
   return (dispatch) => {
      return authAPI.me()
         .then(responce => {
            if (responce.data.resultCode === 0) {
               let { id, email, login } = responce.data.data;
               dispatch(setAuthUserData(id, email, login, true))
            }
         });
   }
}
//loginThunkCreator ->
export function login(email, password, rememberMe) {
   return (dispatch) => {
      authAPI.login(email, password, rememberMe)
         .then(responce => {
            if (responce.data.resultCode === 0) {
               dispatch(getAuthUserData())
            } else {
               let message = responce.data.messages.length > 0
                  ? responce.data.messages[0]
                  : "Something went wrong. Please change your email or password and try again."
               dispatch(
                  stopSubmit("login", { _error: message })
               );
            }
         });
   }
}
//logoutThunkCreator ->
export function logout() {
   return (dispatch) => {
      authAPI.logout()
         .then(responce => {
            if (responce.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false))
            }
         });
   }
}

export default authReducer;