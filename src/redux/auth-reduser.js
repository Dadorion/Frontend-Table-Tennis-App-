import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
};
function authReducer(state = initialState, action) {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      default:
         return state;
   };
}

export function setAuthUserData(userId, email, login) {
   return { type: SET_USER_DATA, data: { userId, email, login } }
}

//authThunkCreator ->
export function getAuthUserData() {
   return (dispatch) => {
      authAPI.me()
       .then(responce => {
           if (responce.data.resultCode === 0) {
              let { id, email, login } = responce.data.data;
              dispatch(setAuthUserData(id, email, login))
           }
        });
   }
}

export default authReducer;