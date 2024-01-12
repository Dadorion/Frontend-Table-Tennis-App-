import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from "redux";
import profileReducer from './profile-reducer';
import gameReducer from './game-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reduser';
import appReducer from './app-reduser';
import headerReduser from "./header-reduser";
import filterReducer from "./filter-reducer";
import registrationReducer from "./registration-reduser";
import thunkMiddleware from "redux-thunk"; // нужно, чтобы работал thunkCreator
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
   profileReducer,
   gameReducer,
   usersReducer,
   registrationReducer,
   headerReduser,
   auth: authReducer,
   form: formReducer,
   app: appReducer,
   filterReducer
});

// дря расширения REDUX в браузере хром
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(redusers, composeEnhancers(
   applyMiddleware(thunkMiddleware)
))

window.store = store;

export default store;