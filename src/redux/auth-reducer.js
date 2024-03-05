import { stopSubmit } from 'redux-form'

import { authAPI } from '../api/api'

const SET_USER_DATA = 'ttsh/auth/SET-USER-DATA'
const LOGIN = 'ttsh/auth/LOGIN'

const initialState = {
  user_id: null,
  birthday: null,
  city: null,
  email: null,
  password: null,
  name: null,
  status: null,
  surname: null,
  isAuth: false,
  rememberMe: false,
}

export function setAuthUserData(payload) {
  return {
    type: SET_USER_DATA,
    payload,
  }
}
export function setLoginUserData(formData) {
  return {
    type: LOGIN,
    payload: formData,
  }
}

// authThunkCreator ->
export const getAuthUserData = () => async (dispatch) => {
  try {
    if (!localStorage.token) return
    const responce = await authAPI.me()
    if (responce.status === 200) {
      dispatch(
        setAuthUserData({
          ...responce.data,
          isAuth: true,
        }),
      )
    }
  } catch (error) {
    console.log('ошибка: ', error.message)
    console.log('сообщение: ', error.response.data.message)
    dispatch(setAuthUserData({ isAuth: false }))
  }
}

// authThunkCreator ->
export function loginTC(formData) {
  return async (dispatch) => {
    console.log('попытка логинизации')
    const responce = await authAPI.login(formData)
    const token = responce.data

    if (!token) {
      const message =
        responce.data.messages.length > 0
          ? responce.data.messages[0]
          : 'Something went wrong. Please change your email or password and try again.'
      dispatch(stopSubmit('login', { _error: message }))
      return
    }
    localStorage.setItem('token', token)
    console.log('токен установлен в локалсторедж')
    dispatch(
      setLoginUserData({
        ...formData,
        isAuth: true,
      }),
    )
  }
}

// logoutThunkCreator ->
export const logoutTC = () => async (dispatch) => {
  const responce = await authAPI.logout()
  if (responce.data.code === 0) {
    const nullObject = {
      user_id: null,
      birthday: null,
      city: null,
      email: null,
      password: null,
      name: null,
      status: null,
      surname: null,
      isAuth: false,
      rememberMe: false,
    }
    dispatch(setAuthUserData(nullObject))
    localStorage.removeItem('token')
  }
}

function updateUserData(state, payload) {
  return {
    ...state,
    ...payload,
  }
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return updateUserData(state, action.payload)
    case LOGIN:
      return updateUserData(state, action.payload)
    default:
      return state
  }
}

export default authReducer
