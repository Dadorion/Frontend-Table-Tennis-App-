import AddGame from './AddGame';
import { updateFirstNameActionCreator, updateSecondNameActionCreator, updateFirstScoreActionCreator, updateSecondScoreActionCreator, addNewGameActionCreator } from '../../redux/game-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    state: state.gameReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    firstNameChange: (body) => {
      dispatch(updateFirstNameActionCreator(body));
    },
    secondNameChange: (body) => {
      dispatch(updateSecondNameActionCreator(body));
    },
    firstScoreChange: (body) => {
      dispatch(updateFirstScoreActionCreator(body));
    },
    secondScoreChange: (body) => {
      dispatch(updateSecondScoreActionCreator(body));
    },
    addClick: () => {
      dispatch(addNewGameActionCreator());
    },
  }
}

const AddGameContainer =
  connect(mapStateToProps, mapDispatchToProps)(AddGame);





export default AddGameContainer;
