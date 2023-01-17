import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reduser';
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
   profileReducer,
   gameReducer,
   usersReducer,
   auth: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;