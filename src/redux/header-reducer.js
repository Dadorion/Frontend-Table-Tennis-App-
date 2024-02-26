import { headerPageAPI } from "../api/api_lern"

const CHANGE_NAME = 'CHANGE_NAME'
const UPDATE_NAME = 'UPDATE_NAME'
const IS_EDITING_CHANGE = 'IS_EDITING_CHANGE'
const GET_DATA_FROM_BD = 'GET_DATA_FROM_BD'
const IS_FETCHING_ON = 'IS_FETCHING_ON'
const IS_FETCHING_OFF = 'IS_FETCHING_OF'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'


let initialState = {
   name: 'nameless',
   newNameText: '',
   isEditingName: false,
   profileInfo: null,
   isFetching: false
}

export function changeNameAC(newNameText) {
   return { type: CHANGE_NAME, payload: { newNameText } }
}
export function updateNameAC(newNameText) {
   return { type: UPDATE_NAME, payload: { newNameText } }
}
export function toggleEditingNameAC() {
   return { type: IS_EDITING_CHANGE }
}
export function getDataAC() {
   return { type: GET_DATA_FROM_BD }
}
export function fetchingOnAC() {
   return { type: IS_FETCHING_ON }
}
export function fetchingOffAC() {
   return { type: IS_FETCHING_OFF }
}
export function setProfileInfo(profileInfo) {
   return { type: SET_PROFILE_INFO, payload: { profileInfo } }
}


export function getDataThunkCreator() {
   // возвращает Thunk -> getDataThunk ввиде анонимной функции
   return (dispatch) => {
      dispatch(fetchingOnAC())
      headerPageAPI.getProfileInfo().then(data => {
         dispatch(setProfileInfo(data))
      })
      dispatch(fetchingOffAC())
   }
}


function headerReduser(state = initialState, action) {
   switch (action.type) {
      case CHANGE_NAME:
         return {
            ...state,
            newNameText: action.payload.newNameText
         }
      case UPDATE_NAME:
         return {
            ...state,
            name: action.payload.newNameText
         }
      case IS_EDITING_CHANGE:
         return {
            ...state,
            isEditingName: !state.isEditingName
         }
      case IS_FETCHING_ON:
         return {
            ...state,
            isFetching: true
         }
      case IS_FETCHING_OFF:
         return {
            ...state,
            isFetching: false
         }
      case SET_PROFILE_INFO:
         return {
            ...state,
            profileInfo: action.payload.profileInfo
         }

      default:
         return state
   }
}

export default headerReduser