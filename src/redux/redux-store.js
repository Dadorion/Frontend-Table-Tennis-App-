import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reduser';
import appReducer from './app-reduser';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
   profileReducer,
   gameReducer,
   usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;