import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';
import usersReducer from './users-reducer';

let redusers = combineReducers({
   profileReducer,
   gameReducer,
   usersReducer
});

let store = createStore(redusers);

export default store;