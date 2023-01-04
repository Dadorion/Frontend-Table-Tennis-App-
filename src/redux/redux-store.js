import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';
// import locationReducer from './location-reducer';

// let redusers = combineReducers({profileReducer, locationReducer});
let redusers = combineReducers({profileReducer, gameReducer});

let store = createStore(redusers);

export default store;