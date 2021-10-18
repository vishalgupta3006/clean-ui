const passwordValidationCheck = (password: string) => {
  const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/);
  return passwordRegex.test(password);
}
export default passwordValidationCheck;