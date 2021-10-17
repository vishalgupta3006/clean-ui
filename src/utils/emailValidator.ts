const emailValidator = (email: string) => {
  const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  if (!email) return true;
  return emailRegex.test(email);
}
export default emailValidator;