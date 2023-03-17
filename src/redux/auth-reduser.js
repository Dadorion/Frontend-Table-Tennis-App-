import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'ttsh/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'ttsh/auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null, // if null, the CAPTCHA is not required
};
function authReducer(state = initialState, action) {

   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   };
}

export function setAuthUserData(userId, email, login, isAuth, captchaUrl) {
   return { type: SET_USER_DATA, payload: { userId, email, login, isAuth, captchaUrl } }
}
export function getCaptchaUrlSuccess(captchaUrl) {
   return { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
}

//authThunkCreator ->
export const getAuthUserData = () => async (dispatch) => {

   const responce = await authAPI.me();

   if (responce.data.resultCode === 0) {
      const { id, email, login } = responce.data.data;
      dispatch(setAuthUserData(id, email, login, true))
   }

}

//loginThunkCreator ->
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   const responce = await authAPI.login(email, password, rememberMe, captcha);
   if (responce.data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      if (responce.data.resultCode === 10) {
         dispatch(getCaptchaUrl());
      }
      const message = responce.data.messages.length > 0
         ? responce.data.messages[0]
         : "Something went wrong. Please change your email or password and try again."
      dispatch(
         stopSubmit("login", { _error: message })
      );
   }
}

//captchaThunkCreator ->
export const getCaptchaUrl = () => async (dispatch) => {
   const responce = await securityAPI.getCaptchaUrl();
   const captchaUrl = responce.data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));

}

//logoutThunkCreator ->
export const logout = () => async (dispatch) => {
   const responce = await authAPI.logout();
   if (responce.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false, null));
   }
}

export default authReducer;