// import { profileAPI } from "../api/api";

let initialState = {
  rivals: null,
  date: null,
  gender: null,
  wins: null,
  locations: null,
  startDate: null,
  endDate: null,
  lastCities: []
};

// ----------reduser's types----------
const SET_RIVALS = "SET_RIVALS";
const SET_DATE = "SET_DATE";
const SET_GENDER = "SET_GENDER";
const SET_WINS = "SET_WINS";
const SET_LOCATIONS = "SET_LOCATIONS";
const SET_START_DATE = "SET_START_DATE";
const SET_END_DATE = "SET_END_DATE";
const SET_LAST_CITIES = "SET_LAST_CITIES";

// ----------action creaters----------
export function setRivals(payload) {
  return { type: SET_RIVALS, payload };
}
export function setDate(payload) {
  return { type: SET_DATE, payload };
}
export function setGender(payload) {
  return { type: SET_GENDER, payload };
}
export function setWins(payload) {
  return { type: SET_WINS, payload };
}
export function setLocations(payload) {
  return { type: SET_LOCATIONS, payload };
}
export function setStartDate(payload) {
  return { type: SET_START_DATE, payload };
}
export function setEndDate(payload) {
  return { type: SET_END_DATE, payload };
}
export function setLastCities(payload) {
  return { type: SET_LAST_CITIES, payload };
}

// ----------thunck creaters----------
// export function getProfile(filter) {
//   return async (dispatch) => {
//     try {
//       dispatch(setRivals(filter));
//     } catch (error) {
//       console.error("Error setting filter:", error);
//     }
//   };
// }

// --------------reduser--------------
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RIVALS:
      return {
        ...state,
        rivals: action.payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case SET_WINS:
      return {
        ...state,
        wins: action.payload,
      };
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case SET_LAST_CITIES:
      return {
        ...state,
        lastCities: action.payload,
      };

    default:
      return state;
  }
}

export default filterReducer;
