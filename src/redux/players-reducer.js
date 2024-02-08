import { playerAPI } from "../api/api";

let initialState = {
  players: null,
  newPlayerData: {
    name: "",
    surname: "",
  },
  isComplete: false,
  operationMessage: "",

  findPlayerName: "",

  sortModeName: 'Недавние',
  sortMode: "id", // по какому параметру
  sortDirection: "DESC", // возрастание/убывание

  pageSize: 5,
  totalPlayerCount: 0,
  currentPage: 1,
  isFetching: false,
};

// ----------reduser's types----------
const SET_PLAYERS = "players/SET-PLAYERS";
const SET_NEW_NAME = "players/SET_NEW_NAME";
const SET_NEW_SURNAME = "players/SET_NEW_SURNAME";
const ADD_PLAYER = "players/ADD_PLAYER";
const SET_COMPLETE = "players/SET_COMPLETE";
const SET_OPERATION_MSG = "players/SET_OPERATION_MSG";
const SET_SORT_MODE = "players/SET_SORT_MODE";
const SET_SORT_MODE_NAME = "players/SET_SORT_MODE_NAME";
const SET_SORT_DIRECTION = "players/SET_SORT_DIRECTION";
const TOGGLE_IS_FETCHING = "players/TOGGLE-IS-FETCHING";
const SET_CURRENT_PAGE = "players/SET-CURRENT-PAGE";
const SET_FIND_PLAYER_NAME = "players/SET_FIND_PLAYER_NAME";
const SET_TOTAL_PLAYER_COUNT = "players/SET_TOTAL_PLAYER_COUNT";

// ----------action creaters----------
export function setPlayers(players) {
  return { type: SET_PLAYERS, payload: players };
}
export function setNewName(text) {
  return { type: SET_NEW_NAME, payload: text };
}
export function setNewSurname(text) {
  return { type: SET_NEW_SURNAME, payload: text };
}
export function setComplete(text) {
  return { type: SET_COMPLETE, payload: text };
}
export function setOperationMessage(message) {
  return { type: SET_OPERATION_MSG, payload: message };
}
export function addNewPlayer() {
  return { type: ADD_PLAYER };
}
export function setSortMode(mode) {
  return { type: SET_SORT_MODE, payload: mode };
}
export function setSortModeName(modeName) {
  return { type: SET_SORT_MODE_NAME, payload: modeName };
}
export function setSortDirection(direct) {
  return { type: SET_SORT_DIRECTION, payload: direct };
}
export function setCurrentPage(page) {
  return { type: SET_CURRENT_PAGE, payload: page };
}
export function toggleIsFetching(isFetching) {
  return { type: TOGGLE_IS_FETCHING, payload: isFetching };
}
export function setFindPlayerName(text) {
  return { type: SET_FIND_PLAYER_NAME, payload: text };
}
export function setTotalPlayersCount(count) {
  return { type: SET_TOTAL_PLAYER_COUNT, payload: count };
}

// ----------thunck creaters----------
export function addNewPlayerTC(name, surname) {
  return async (dispatch) => {
    try {
      let responce = await playerAPI.addNewPlayer(name, surname);
      if (responce.code === 0) {
        dispatch(addNewPlayer());
        dispatch(setComplete(true));
        dispatch(setOperationMessage(responce));
      } else {
        dispatch(setComplete(false));
        dispatch(setOperationMessage(responce));
      }
    } catch (error) {
      console.error("Error adding new player:", error);
    }
  };
}
export function requestPlayersTC(page, pageSize, mode, direct) {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let responce = await playerAPI.getPlayers(page, pageSize, mode, direct);
    dispatch(toggleIsFetching(false));
    dispatch(setPlayers(responce.body));
    dispatch(setTotalPlayersCount(responce.pagination.totalCount));
  };
}
export function requestPlayersWithNameTC(text) {
  if (!text.trim()) {
    return async (dispatch) => {
      dispatch(setPlayers([]));
    };
  }

  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let players = await playerAPI.getPlayersWithName(text);
    dispatch(toggleIsFetching(false));
    dispatch(setPlayers(players));
  };
}
export function setFindPlayerNameTC(text) {
  return async (dispatch) => {
    dispatch(setFindPlayerName(text));
  };
}

// --------------reduser--------------
function playersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_NAME:
      return {
        ...state,
        newPlayerData: {
          ...state.newPlayerData,
          name: action.payload,
        },
      };
    case SET_NEW_SURNAME:
      return {
        ...state,
        newPlayerData: {
          ...state.newPlayerData,
          surname: action.payload,
        },
      };
    case SET_COMPLETE:
      return {
        ...state,
        isComplete: true,
      };
    case SET_OPERATION_MSG:
      return {
        ...state,
        operationMessage: action.payload,
      };
    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case ADD_PLAYER:
      return {
        ...state,
        newPlayerData: {
          ...state.newPlayerData,
          name: "",
          surname: "",
        },
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SORT_MODE:
      return {
        ...state,
        sortMode: action.payload,
      };
    case SET_SORT_MODE_NAME:
      return {
        ...state,
        sortModeName: action.payload,
      };
    case SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: action.payload,
      };
    case SET_FIND_PLAYER_NAME:
      return {
        ...state,
        findUserName: action.payload,
      };
    case SET_TOTAL_PLAYER_COUNT:
      return {
        ...state,
        totalPlayersCount: action.payload,
      };

    default:
      return state;
  }
}

export default playersReducer;
