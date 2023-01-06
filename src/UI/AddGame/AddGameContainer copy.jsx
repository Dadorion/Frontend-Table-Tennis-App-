import React from 'react';
import AddGame from './AddGame';
import { updateFirstNameActionCreator, updateSecondNameActionCreator, updateFirstScoreActionCreator, updateSecondScoreActionCreator, addNewGameActionCreator } from '../../redux/game-reducer';
import { connect } from 'react-redux';

function AddGameContainer(props) {
  function onFirstNameChange(e) {
    let newName = e.target.value;
    props.store.dispatch(updateFirstNameActionCreator(newName));
  }
  function onSecondNameChange(e) {
    let newName = e.target.value;
    props.store.dispatch(updateSecondNameActionCreator(newName));
  }
  function onFirstScoreChange(e) {
    let score = e.target.value;
    props.store.dispatch(updateFirstScoreActionCreator(score));
  }
  function onSecondScoreChange(e) {
    let score = e.target.value;
    props.store.dispatch(updateSecondScoreActionCreator(score));
  }

  function onAddClick() {
    props.store.dispatch(addNewGameActionCreator());
  }


  return (
    <AddGame
      state={props.store.getState().gameReducer}
      onFirstNameChange={onFirstNameChange}
      onSecondNameChange={onSecondNameChange}
      onFirstScoreChange={onFirstScoreChange}
      onSecondScoreChange={onSecondScoreChange}
      onAddClick={onAddClick}
    />
  )
}



function mapStateToProps(state) {
  return {
    state: state.gameReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onFirstNameChange: function (newName) {
      dispatch(updateFirstNameActionCreator(newName));
    },
    onSecondNameChange: function (newName) {
      dispatch(updateSecondNameActionCreator(newName));
    },
    onFirstScoreChange: function (score) {
      dispatch(updateFirstScoreActionCreator(score));
    },
    onSecondScoreChange: function (score) {
      dispatch(updateSecondScoreActionCreator(score));
    },
    onAddClick: function () {
      dispatch(addNewGameActionCreator());
    },
  }
}

const superAddGameContainer = connect(mapStateToProps, mapDispatchToProps)(AddGame);





export default AddGameContainer;
