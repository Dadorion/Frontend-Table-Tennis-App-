const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';
const UDATE_NEW_NAME_TEXT = 'UDATE-NEW-NAME-TEXT';
const UDATE_NEW_SURNAME_TEXT = 'UDATE-NEW-SURNAME-TEXT';
const UDATE_NEW_BIRTHDATE_TEXT = 'UDATE-NEW-BIRTHDATE-TEXT';
const UDATE_NEW_LOCRATING_TEXT = 'UDATE-NEW-LOCRATING-TEXT';


let initialState = {
    profiles: [
        {
            id: 0,
            name: 'Василий',
            surname: 'Твердоухов',
            birthdate: '25.12.2022',
            locRating: 0
        },
        {
            id: 1,
            name: 'Джафа',
            surname: 'Гордецов',
            birthdate: '25.12.2022',
            locRating: 0
        },
    ],
    newName: '',
    newSurname: '',
    newBirthdate: '',
    newLocRating: '',
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

export default profileReducer;