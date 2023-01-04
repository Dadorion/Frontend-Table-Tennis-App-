import React from 'react';
import AddGame from './AddGame';
import { updateFirstNameActionCreator, updateSecondNameActionCreator, updateFirstScoreActionCreator, updateSecondScoreActionCreator, addNewGameActionCreator } from '../../redux/game-reducer';

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
export default AddGameContainer;
