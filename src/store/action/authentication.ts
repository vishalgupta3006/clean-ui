export const authenticationAction = {
  USER_LOGGED_IN:'userLoggedIn',
  USER_LOGGED_OUT:'userLoggedOut'
}
export const userLoggedIn = () => {
  return {
    type: authenticationAction.USER_LOGGED_IN
  }
}
export const userLoggedOut = () => {
  return {
    type: authenticationAction.USER_LOGGED_OUT
  }
}
