export const emailValidator = (email: string) => {
  const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  return emailRegex.test(email);
}

export const passwordValidationCheck = (password: string) => {
  const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/);
  return passwordRegex.test(password);
}