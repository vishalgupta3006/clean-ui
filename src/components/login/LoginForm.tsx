import './LoginForm.scss';
import Button from "../reusable/input/Button/Button";
import PasswordField from '../reusable/input/PasswordField/PasswordField';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import emailValidator from '../../utils/emailValidationCheck';
import { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import EmailField from '../reusable/input/EmailField/EmailField';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../../store/action/authentication';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const history = useHistory();
  const loginHandler = (EmailAddress:string, password:string) => {
    setIsLoading(true);
    const requestOptions ={
      withCredentials: true,
      headers: {'Content-Type': 'application/json'},
    }
    const data = {
      EmailAddress,
      password
    }
    axios.post('http://localhost:8080/api/auth/login',data, requestOptions)
    .then(res => {
      setIsLoading(false);
      setIsLoginSuccessful(true);
      history.push('/dashboard');
    })
    .catch(err => {
      setIsLoading(false);
      toast.error("Invalid Login Credentials !!");
    })
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    const EmailAddress = e.target[0].value;
    const password = e.target[1].value;
    if (!EmailAddress) return toast.error("Please enter the Email Address");
    if(!password) return toast.error("Please enter the Password");
    if(!emailValidator(EmailAddress)) return toast.error("Email Address is not valid");
    loginHandler(EmailAddress, password);
  }

  const dispatch = useDispatch();
  useEffect(()=>{
    if(isLoginSuccessful)
    dispatch(userLoggedIn());
  },[isLoginSuccessful, dispatch]);

  return (
    <div className='loginContainer'>
      <ToastContainer />
      <div className='loginHeading'>
        <h1 className='headingText'>Login to <span className='companyName'>Clean</span></h1>
      </div>
      <div className='loginBody'>
        <form onSubmit={submitHandler}>
          <EmailField placeholder="Enter Email" label="Email" disableErrorControl />
          <PasswordField placeholder="Enter Password" label="Password" disableErrorControl/>
          <Button type='submit' label='Login' className='btn-medium' isLoading={isLoading} />
        </form>
      </div>
      <div className='loginContainerFooter'>
        You are not a member? <Link to='/register' className='registerLink'>Register </Link>
      </div>
    </div>
  );
}
export default LoginForm;