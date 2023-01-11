const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


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
        default:
            return state;
    };
}

export function followAC(id) {
    return { type: FOLLOW, id }
}
export function unfollowAC(id) {
    return { type: UNFOLLOW, id }
}
export function setUsersAC(users) {
    return { type: SET_USERS, users }
}
export function setCurrentPageAC(page) {
    return { type: SET_CURRENT_PAGE, page }
}
export function setTotalUsersCountAC(totalCount) {
    return { type: SET_TOTAL_USERS_COUNT, totalCount }
}

export default usersReducer;