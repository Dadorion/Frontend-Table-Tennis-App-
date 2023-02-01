import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [
        // {
        //     id: 0,
        //     followed: false,
        //     name: 'Василий',
        //     surname: 'Теплоухов',
        //     birthdate: '25.12.2022',
        //     locRating: 214
        // },
        // {
        //     id: 1,
        //     followed: false,
        //     name: 'Джафа',
        //     surname: 'Гордецов',
        //     birthdate: '25.12.2022',
        //     locRating: 118
        // },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

function usersReducer(state = initialState, action) {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
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
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(
                            id => id !== action.userId)
            };
        default:
            return state;
    };
}

export function followSuccess(id) {
    return { type: FOLLOW, id }
}
export function unfollowSuccess(id) {
    return { type: UNFOLLOW, id }
}
export function setUsers(users) {
    return { type: SET_USERS, users }
}
export function setCurrentPage(page) {
    return { type: SET_CURRENT_PAGE, page }
}
export function setTotalUsersCount(totalCount) {
    return { type: SET_TOTAL_USERS_COUNT, totalCount }
}
export function toggleIsFetching(isFetching) {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export function toggleFollowingProgress(isFetching, userId) {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

//getUsersThunkCreator ->
export function requestUsers(page, pageSize) {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then(responce => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(responce.items));
                dispatch(setTotalUsersCount(responce.totalCount));
            });
    }

}
//followThunkCreator ->
export function follow(userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
          .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
          });
    }
}
//unfollowThunkCreator ->
export function unfollow(userId) {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
          .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
          });
    }
}

export default usersReducer;