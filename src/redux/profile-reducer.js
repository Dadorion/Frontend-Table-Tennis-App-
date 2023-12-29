import { profileAPI } from "../api/api";

let initialState = {
  profile: null,
  newProfileData: {
    name: "",
    surname: "",
    status: "",
    city: "",
    region: "",
    birthday: "",
    base: "",
    forhand_pad: "",
    backhand_pad: "",
    photoUrl: "",
  },
};

// const profile = {
//   name: "Антон",
//   surname: "Бабенко",
//   status: "Мой примой статус.",
//   city: "Калининград",
//   region: "Калининградская область",
//   birthday: "1987-11-07T20:00:00.000Z",
//   base: "Китайская",
//   forhand_pad: "Тоже китайская липучка",
//   backhand_pad: "Европейский полутензер",
//   percentOfWin: 50,
// };

// ----------reduser's types----------
const SET_MY_PROFILE = "SET_MY_PROFILE";
const SET_MY_NEW_PROFILE = "SET_MY_NEW_PROFILE";
const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_SURNAME = "CHANGE_SURNAME";
const CHANGE_STATUS = "CHANGE_STATUS";
const CHANGE_CITY = "CHANGE_CITY";
const CHANGE_REGION = "CHANGE_REGION";
const CHANGE_BIRTHDAY = "CHANGE_BIRTHDAY";
const CHANGE_RACKET_BASE = "CHANGE_RACKET_BASE";
const CHANGE_RACKET_FORHAND = "CHANGE_RACKET_FORHAND";
const CHANGE_RACKET_BACKHAND = "CHANGE_RACKET_BACKHAND";
const CHANGE_PHOTO = "CHANGE_PHOTO";

// ----------action creaters----------
export function setMyProfile(profile) {
  return { type: SET_MY_PROFILE, payload: profile };
}
export function setMyNewProfile(profile) {
  return { type: SET_MY_NEW_PROFILE, payload: profile };
}

export function changeName(text) {
  return { type: CHANGE_NAME, payload: text };
}
export function changeSurname(text) {
  return { type: CHANGE_SURNAME, payload: text };
}
export function changeStatus(text) {
  return { type: CHANGE_STATUS, payload: text };
}
export function changeCity(text) {
  return { type: CHANGE_CITY, payload: text };
}
export function changeRegion(text) {
  return { type: CHANGE_REGION, payload: text };
}
export function changeBirthday(text) {
  return { type: CHANGE_BIRTHDAY, payload: text };
}
export function changeRacketBase(text) {
  return { type: CHANGE_RACKET_BASE, payload: text };
}
export function changeRacketForhand(text) {
  return { type: CHANGE_RACKET_FORHAND, payload: text };
}
export function changeRacketBackhand(text) {
  return { type: CHANGE_RACKET_BACKHAND, payload: text };
}
export function changePhoto(url) {
  return { type: CHANGE_PHOTO, payload: url };
}

// ----------thunck creaters----------
export function getProfile() {
  return async (dispatch) => {
    try {
      let responce = await profileAPI.getMyProfile();
      dispatch(setMyProfile(responce));
      dispatch(setMyNewProfile(responce));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
}
export function saveNewProfile(newProfileData) {
  return async (dispatch) => {
    try {
      const responce = await profileAPI.updateMyProfile(newProfileData);
      console.log(responce.code);

      if (responce.code !== 0)
        throw Error("Запись нового профиля в БД не удалась");

      const newProfile = await profileAPI.getMyProfile();
      dispatch(setMyProfile(newProfile));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
}
export function saveStatus(status) {
  return async (dispatch) => {
    try {
      const responce = await profileAPI.updateStatus(status);

      if (responce.code !== 0)
        throw Error("Запись нового профиля в БД не удалась");

      const newProfile = await profileAPI.getMyProfile();
      dispatch(setMyProfile(newProfile));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
}
export function savePhoto(file) {
  return async (dispatch) => {
    try {
      const responce = await profileAPI.updatePhoto(file);

      if (responce.code !== 0)
        throw Error("Запись нового профиля в БД не удалась");

      const newProfile = await profileAPI.getMyProfile();
      dispatch(setMyProfile(newProfile));
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
}

// --------------reduser--------------
function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SET_MY_NEW_PROFILE:
      return {
        ...state,
        newProfileData: action.payload,
      };
    case CHANGE_NAME:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          name: action.payload,
        },
      };
    case CHANGE_SURNAME:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          surname: action.payload,
        },
      };
    case CHANGE_STATUS:
      // console.log(state.newProfileData.status);
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          status: action.payload,
        },
      };
    case CHANGE_CITY:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          city: action.payload,
        },
      };
    case CHANGE_REGION:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          region: action.payload,
        },
      };
    case CHANGE_BIRTHDAY:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          birthday: action.payload,
        },
      };
    case CHANGE_RACKET_BASE:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          base: action.payload,
        },
      };
    case CHANGE_RACKET_FORHAND:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          forhand_pad: action.payload,
        },
      };
    case CHANGE_RACKET_BACKHAND:
      return {
        ...state,
        newProfileData: {
          ...state.newProfileData,
          backhand_pad: action.payload,
        },
      };
    default:
      return state;
  }
}

export default profileReducer;
