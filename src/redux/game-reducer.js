const ADD_NEW_GAME = 'ADD-NEW-GAME'
const UPDATE_FIRST_NAME = 'UPDATE-FIRST-NAME'
const UPDATE_SECOND_NAME = 'UPDATE-SECOND-NAME'
const UPDATE_FIRST_SCORE = 'UPDATE-FIRST-SCORE'
const UPDATE_SECOND_SCORE = 'UPDATE-SECOND-SCORE'

const initialState = {
  games: [
    {
      id: 0,
      date: '25.12.2022',
      gameFrom: 3,
      firstPlayer: {
        id: 1,
        name: 'Anton',
        score: [11],
        isWinner: true,
      },
      secondPlayer: {
        id: 2,
        name: 'Alik',
        score: [7],
        isWinner: false,
      },
      table: 'lightskyblue',
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
      table: 'blue',
    },
  ],
  newFirstName: '',
  newSecondName: '',
  newFirstScore: '',
  newSecondScore: '',
}

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        newFirstName: action.name,
      }
    case UPDATE_SECOND_NAME:
      return {
        ...state,
        newSecondName: action.name,
      }
    case UPDATE_FIRST_SCORE:
      return {
        ...state,
        newFirstScore: action.score,
      }
    case UPDATE_SECOND_SCORE:
      return {
        ...state,
        newSecondScore: action.score,
      }
    case ADD_NEW_GAME:
      const winner = state.newFirstScore > state.newSecondScore
      function toKnowDate() {
        const Y = new Date().getFullYear()
        let M = new Date().getMonth() + 1
        M = M < 10 ? `0${M}` : M
        const D = new Date().getDate()
        return `${D}.${M}.${Y}`
      }
      const newGame = {
        id: Date.now(),
        date: toKnowDate(),
        gameFrom: 1,
        firstPlayer: {
          id: 5,
          name: state.newFirstName,
          score: [state.newFirstScore],
          isWinner: winner,
        },
        secondPlayer: {
          id: 6,
          name: state.newSecondName,
          score: [state.newSecondScore],
          isWinner: !winner,
        },
        table: 'blue',
      }

      return {
        ...state,
        games: [...state.games, newGame],
        newFirstName: '',
        newSecondName: '',
        newFirstScore: '',
        newSecondScore: '',
      }

    default:
      return state
  }
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

export default gameReducer
