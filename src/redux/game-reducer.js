const ADD_NEW_GAME = 'ADD-NEW-GAME';
const UPDATE_FIRST_NAME = 'UPDATE-FIRST-NAME';
const UPDATE_SECOND_NAME = 'UPDATE-SECOND-NAME';
const UPDATE_FIRST_SCORE = 'UPDATE-FIRST-SCORE';
const UPDATE_SECOND_SCORE = 'UPDATE-SECOND-SCORE';

let initialState = {
    games: [
        {
            id: 0,
            date: '25.12.2022',
            gameFrom: 3,
            firstPlayer: {
                id: 1,
                name: 'Alexander',
                score: [11, 9, 17],
                isWinner: true,
            },
            secondPlayer: {
                id: 2,
                name: 'Alik',
                score: [7, 11, 15],
                isWinner: false,
            },
            table: 'lightskyblue'
        },
        {
            id: 1,
            date: '25.12.2022',
            gameFrom: 3,
            firstPlayer: {
                id: 3,
                name: 'Ilona',
                score: [7, 15, 11],
                isWinner: true,
            },
            secondPlayer: {
                id: 4,
                name: 'Liana',
                score: [11, 13, 9],
                isWinner: false,
            },
            table: 'blue'
        }
    ],
    newFirstName: '',
    newSecondName: '',
    newFirstScore: '',
    newSecondScore: '',
};

function gameReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_FIRST_NAME:
            state.newFirstName = action.name;
            return state;
        case UPDATE_SECOND_NAME:
            state.newSecondName = action.name;
            return state;
        case UPDATE_FIRST_SCORE:
            state.newFirstScore = action.score;
            return state;
        case UPDATE_SECOND_SCORE:
            state.newSecondScore = action.score;
            return state;
        case ADD_NEW_GAME:
            debugger;
            let winner = state.newFirstScore > state.newSecondScore;

            let newGame = {
                id: state.games.length + 1,
                date: new Date(),
                gameFrom: 1,
                firstPlayer: {
                    id: 5,
                    name: state.newFirstName,
                    score: state.newFirstScore,
                    isWinner: winner
                },
                secondPlayer: {
                    id: 6,
                    name: state.newFirstName,
                    score: state.newFirstScore,
                    isWinner: !winner
                },
                table: 'blue'
            }
            state.games.push(newGame);
            state.newFirstName = '';
            state.newSecondName = '';
            state.newFirstScore = '';
            state.newSecondScore = '';
            return state;
        default:
            return state;
    };
}

export function updateFirstNameActionCreator(name) {
    return {
        type: UPDATE_FIRST_NAME,
        name,
    }
}
export function updateSecondNameActionCreator(name) {
    return {
        type: UPDATE_SECOND_NAME,
        name,
    }
}
export function updateFirstScoreActionCreator(score) {
    return {
        type: UPDATE_FIRST_SCORE,
        score,
    }
}
export function updateSecondScoreActionCreator(score) {
    return {
        type: UPDATE_SECOND_SCORE,
        score,
    }
}


export function addNewGameActionCreator() {
    return { type: ADD_NEW_GAME }
}

export default gameReducer;