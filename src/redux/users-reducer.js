const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        {
            id: 0,
            followed: false,
            name: 'Василий',
            surname: 'Теплоухов',
            birthdate: '25.12.2022',
            locRating: 0
        },
        {
            id: 1,
            followed: false,
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
                users: [...state.users, ...action.users]
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

export default usersReducer;