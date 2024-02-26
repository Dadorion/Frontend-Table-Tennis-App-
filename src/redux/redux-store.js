import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from "redux";
import profileReducer from "./profile-reducer";
import playersReducer from "./players-reducer";
import gameReducer from "./game-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import headerReducer from "./header-reducer";
import filterReducer from "./filter-reducer";
import registrationReducer from "./registration-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profileReducer,
  playersReducer,
  gameReducer,
  usersReducer,
  registrationReducer,
  headerReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  filterReducer,
});

// дря расширения REDUX в браузере хром
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
