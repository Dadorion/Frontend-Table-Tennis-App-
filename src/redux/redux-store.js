import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';

let redusers = combineReducers({profileReducer, gameReducer});

let store = createStore(redusers);

export default store;