import { authAPI } from '../api/api'

const initialState = {
  id: null,
  email: null,
  password: null,
  rememberMe: false,
}

const LOGIN = 'ttsh/auth/LOGIN'

export function setLoginUserData(id, email, password, rememberMe) {
  return {
    type: LOGIN,
    payload: {
      id,
      email,
      password,
      rememberMe,
    },
  }
}

export function loginTC(formData) {
  return async (dispatch) => {
    const responce = await authAPI.login(formData)
    console.log('responce: ', responce)
    // В ответе получаем токен, который содержит id пользователя.
    const token = responce.data
    localStorage.setItem('token', token)
  }
}

// -------------= reduser =--------------------------
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default loginReducer
