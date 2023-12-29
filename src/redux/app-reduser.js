import { getAuthUserData } from "./auth-reduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
   initialized: false,
}

function appReducer(state = initialState, action) {

   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   };
}

// appActionCreator
function initializedSuccsess() {
   return { type: INITIALIZED_SUCCESS }
}

//authThunkCreator ->
export function initializeApp() {
   return (dispatch) => {
      let promise = dispatch(getAuthUserData());
      Promise.all([promise])
         .then(() => {
            dispatch(initializedSuccsess());
         })

   }
}

export default appReducer;