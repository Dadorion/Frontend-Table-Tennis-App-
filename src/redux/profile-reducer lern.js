import { usersAPI, profileAPI } from "../api/api";

const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';
const UDATE_NEW_NAME_TEXT = 'UDATE-NEW-NAME-TEXT';
const UDATE_NEW_SURNAME_TEXT = 'UDATE-NEW-SURNAME-TEXT';
const UDATE_NEW_BIRTHDATE_TEXT = 'UDATE-NEW-BIRTHDATE-TEXT';
const UDATE_NEW_LOCRATING_TEXT = 'UDATE-NEW-LOCRATING-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';


let initialState = {
    profiles: [],
    newName: '',
    newSurname: '',
    newBirthday: '',
    profile: null,
    status: ""
};

function profileReducer(state = initialState, action) {

    switch (action.type) {
        case UDATE_NEW_NAME_TEXT:
            return { ...state };
        case UDATE_NEW_SURNAME_TEXT:
            return {
                ...state,
                newCityText: action.newSurname
            };
        case UDATE_NEW_BIRTHDATE_TEXT:
            return {
                ...state,
                newCityText: action.newBirthday
            };
        case UDATE_NEW_LOCRATING_TEXT:
            return {
                ...state,
                newCityText: action.newLocRating
            };
        case ADD_NEW_PROFILE:
            let newProfile = {
                id: new Date(),
                name: state.newName,
                surname: state.newSurname,
                birthdate: state.newBirthday,
            }

            return {
                ...state,
                profiles: [...state.profiles, newProfile],
                newName: '',
                newSurname: '',
                newBirthday: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    };
}

export function updateNewProfileNameActionCreator(newName) {
    return {
        type: UDATE_NEW_NAME_TEXT,
        newName,
    }
}
export function updateNewProfileSurnameActionCreator(newSurname) {
    return {
        type: UDATE_NEW_SURNAME_TEXT,
        newSurname,
    }
}
export function updateNewProfileBirthdateActionCreator(newBirthday) {
    return {
        type: UDATE_NEW_BIRTHDATE_TEXT,
        newBirthday,
    }
}
export function updateNewProfileLocRatingActionCreator(newLocRating) {
    return {
        type: UDATE_NEW_LOCRATING_TEXT,
        newLocRating,
    }
}

export function addNewProfileActionCreator() {
    return { type: ADD_NEW_PROFILE }
}
export function setUserProfile(profile) {
    return { type: SET_USER_PROFILE, profile }
}
export function setStatus(status) {
    return { type: SET_STATUS, status }
}
export function savePhotoSuccess(photos) {
    return { type: SAVE_PHOTO_SUCCESS, photos }
}


//getProfileThunkCreator ->
// export const getProfile = (userId) => async (dispatch) => {
//     let responce = await usersAPI.getProfile(userId);
//     dispatch(setUserProfile(responce.data));
// }
export function getProfile(userId) {
    return async (dispatch) => {
        let responce = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(responce.data));
    }
}
//getStatusThunkCreator ->
export const getStatus = (userId) => async (dispatch) => {
    let responce = await profileAPI.getStatus(userId);
    dispatch(setStatus(responce.data));
}
//updateStatusThunkCreator ->
export const updateStatus = (status) => async (dispatch) => {
    let responce = await profileAPI.updateStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
//savePhotoThunkCreator ->
export const savePhoto = (file) => async (dispatch) => {
    let responce = await profileAPI.savePhoto(file);
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccess(responce.data.data.photos));
    }
}

export default profileReducer;