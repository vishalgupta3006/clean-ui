import { authenticationAction } from "../action/authentication";
const initialState = {
  isLoggedIn: false,
  isLoaded: false
}
const authenticationReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case authenticationAction.USER_LOGGED_IN:
      return{
        ...state,
        isLoggedIn: true,
        isLoaded: true
    }
    case authenticationAction.USER_LOGGED_OUT:
      return{
        ...state,
        isLoggedIn: false,
        isLoaded: true
    }
    default:
      return state;
  }
};

export default authenticationReducer;