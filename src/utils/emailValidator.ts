const emailValidator = (email: string) => {
  const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  if (!email) return true;
  return emailRegex.test(email);
}
export default emailValidator;