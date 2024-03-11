import { registrationAPI } from '../api/api'

const initialState = {
  name: null,
  surname: null,
  city: null,
  birthday: null,
  email: null,
}

const REGISTRATION = 'ttsh/auth/REGISTRATION'

export function setRegistrationUserData(name, surname, city, birthday, email) {
  return {
    type: REGISTRATION,
    payload: {
      name,
      surname,
      city,
      birthday,
      email,
    },
  }
}

export function registrationTC(formData) {
  return async () => {
    const response = await registrationAPI.registration(formData)
    if (response.status) {
      console.log('response.status: ', response.status)
      console.log('response: ', response)
    }

    if (response.status !== 200) {
      console.log('Ошибка: Ответ от сервера не пришел.')
    }
    console.log(response.data.message)
  }
}

export const getRegistrationUserData = () => async (dispatch) => {
  const response = await registrationAPI.registration()

  if (response.data.resultCode === 0) {
    const { name, surname, city, birthday, email, password } = response.data.data
    dispatch(setRegistrationUserData(name, surname, city, birthday, email, password))
  }
}

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default registrationReducer
