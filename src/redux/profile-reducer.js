import { usersAPI, profileAPI } from "../api/api";

const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';
const UDATE_NEW_NAME_TEXT = 'UDATE-NEW-NAME-TEXT';
const UDATE_NEW_SURNAME_TEXT = 'UDATE-NEW-SURNAME-TEXT';
const UDATE_NEW_BIRTHDATE_TEXT = 'UDATE-NEW-BIRTHDATE-TEXT';
const UDATE_NEW_LOCRATING_TEXT = 'UDATE-NEW-LOCRATING-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    profiles: [
        // {
        //     id: 0,
        //     name: 'Василий',
        //     surname: 'Твердоухов',
        //     birthdate: '25.12.2022',
        //     locRating: 0
        // },
        // {
        //     id: 1,
        //     name: 'Джафа',
        //     surname: 'Гордецов',
        //     birthdate: '25.12.2022',
        //     locRating: 0
        // },
    ],
    newName: '',
    newSurname: '',
    newBirthdate: '',
    newLocRating: '',
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
                newCityText: action.newBirthdate
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
                birthdate: state.newBirthdate,
                locRating: state.newLocRating,
            }

            return {
                ...state,
                profiles: [...state.profiles, newProfile],
                newName: '',
                newSurname: '',
                newBirthdate: '',
                newLocRating: ''
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
export function updateNewProfileBirthdateActionCreator(newBirthdate) {
    return {
        type: UDATE_NEW_BIRTHDATE_TEXT,
        newBirthdate,
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


//getProfileThunkCreator ->
export function getProfile(userId) {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(responce => {
                dispatch(setUserProfile(responce.data));
            });
    }
}
//getStatusThunkCreator ->
export function getStatus(userId) {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(responce => {
                dispatch(setStatus(responce.data));
            });
    }
}
//updateStatusThunkCreator ->
export function updateStatus(status) {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;