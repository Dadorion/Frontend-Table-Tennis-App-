import { usersAPI } from "../api/api";

const initialState = {
  users: null,
  findUserName: "",
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],

  totalCount: 10,
  followingInProgressinfo: [],
  pageCounterRedux: 1,
  CicleCounterRedux: 1,
};

// ----------reduser's types----------
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";
const PLUS_PAGE_COUNTER = "PLUS-PAGE-COUNTER";
const CICLE_PAGE_COUNTER = "CICLE-PAGE-COUNTER";
const SET_FIND_USER_NAME = "SET_FIND_USER_NAME";

// ----------action creaters----------
export function followSuccess(id) {
  return { type: FOLLOW, id };
}
export function unfollowSuccess(id) {
  return { type: UNFOLLOW, id };
}
export function setUsers(users) {
  return { type: SET_USERS, users };
}
export function setCurrentPage(page) {
  return { type: SET_CURRENT_PAGE, page };
}
export function setTotalUsersCount(totalCount) {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
}
export function toggleIsFetching(isFetching) {
  return { type: TOGGLE_IS_FETCHING, isFetching };
}
export function toggleFollowingProgress(isFetching, userId) {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId };
}
export function PlusPagesFunc(page) {
  return { type: PLUS_PAGE_COUNTER, page };
}
export function CiclePagesFunc(cicle) {
  return { type: CICLE_PAGE_COUNTER, cicle };
}
export function setFindUserName(text) {
  return { type: SET_FIND_USER_NAME, text };
}

// ----------thunck creaters----------
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actiionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let responce = await apiMethod(userId);
  if (responce.data.resultCode === 0) {
    dispatch(actiionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};
export const setFindUserNameTC = (text) => {
  return async (dispatch) => {
    dispatch(setFindUserName(text));
  };
};
export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let users = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(users));
  };
};
export const requestUsersWithName = (text) => {
  console.log("Санка начала поиск: ", text);

  if (!text.trim()) {
    return async (dispatch) => {
      dispatch(setUsers([]));
    };
  }

  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let users = await usersAPI.getUsersWithName(text);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(users));
  };
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case PLUS_PAGE_COUNTER:
      return {
        ...state,
        pageCounterRedux: action.page,
      };
    case CICLE_PAGE_COUNTER:
      return {
        ...state,
        CicleCounterRedux: action.cicle,
      };
    case SET_FIND_USER_NAME:
      return {
        ...state,
        findUserName: action.text,
      };
    default:
      return state;
  }
}

export default usersReducer;
