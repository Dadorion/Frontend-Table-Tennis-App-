import { connect } from 'react-redux'

import AddGame from './AddGame'

import {
  updateFirstNameActionCreator,
  updateSecondNameActionCreator,
  updateFirstScoreActionCreator,
  updateSecondScoreActionCreator,
  addNewGameActionCreator,
} from '../../redux/game-reducer'

function mapStateToProps(state) {
  return {
    state: state.gameReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    firstNameChange: (body) => {
      dispatch(updateFirstNameActionCreator(body))
    },
    secondNameChange: (body) => {
      dispatch(updateSecondNameActionCreator(body))
    },
    firstScoreChange: (body) => {
      dispatch(updateFirstScoreActionCreator(body))
    },
    secondScoreChange: (body) => {
      dispatch(updateSecondScoreActionCreator(body))
    },
    addGame: () => {
      dispatch(addNewGameActionCreator())
    },
  }
}

const AddGameContainer = connect(mapStateToProps, mapDispatchToProps)(AddGame)

export default AddGameContainer
