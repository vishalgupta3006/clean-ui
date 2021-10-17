import './LoginForm.scss';
import Button from "../reusable/input/Button/Button";
import TextField from '../reusable/input/TextField/TextField';
import PasswordField from '../reusable/input/PasswordField/PasswordField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailValidator from '../../utils/emailValidator';

const LoginForm = () => {
  const loginHandler = (e: any) => {
    e.preventDefault();
    const EmailAddress = e.target[0].value;
    const password = e.target[1].value;
    if (!EmailAddress) return toast.error("Please enter the Email Address")
    if(!password) return toast.error("Please enter the Password")
    if(!emailValidator(EmailAddress)) return toast.error("Email Address is not valid")
    console.log(EmailAddress, password)
  }
  return (
    <div className='loginContainer'>
      <ToastContainer />
      <div className='loginHeading'>
        <h1 className='headingText'>Login to <span className='companyName'>Clean</span></h1>
      </div>
      <div className='loginBody'>
        <form onSubmit={loginHandler}>
          <TextField type="text" placeholder="Enter Email" label="Email" id='email' />
          <PasswordField placeholder="Enter Password" label="Password" id='password' />
          <Button type='submit' label='Login' className='btn-medium' />
        </form>
      </div>
    </div>
  );
}
export default LoginForm;