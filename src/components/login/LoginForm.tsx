import './LoginForm.scss';
import Button from "../reusable/input/Button/Button";
import TextField from '../reusable/input/TextField/TextField';
import PasswordField from '../reusable/input/PasswordField/PasswordField';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import emailValidator from '../../utils/emailValidator';
import { useState } from 'react';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginHandler = (EmailAddress:string, password:string) => {
    const requestOptions ={
      //method: 'POST',
      withCredentials: true,
      headers: {'Content-Type': 'application/json'},
    }
    const data ={
      EmailAddress: EmailAddress,
      password: password
    }
    axios.post('http://localhost:8080/api/auth/login',data, requestOptions)
    .then(res => {
      console.log(res.headers)
      console.log(res)
    })
    .catch(err => console.log(err))
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    const EmailAddress = e.target[0].value;
    const password = e.target[1].value;
    if (!EmailAddress) return toast.error("Please enter the Email Address")
    if(!password) return toast.error("Please enter the Password")
    if(!emailValidator(EmailAddress)) return toast.error("Email Address is not valid")
    //console.log(EmailAddress, password)
    //setIsLoading(true)
    loginHandler(EmailAddress, password);
  }
  const dataHandler = () =>{
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.get('http://localhost:8080/api/data/lead/all',{withCredentials: true})
    .then(res => console.log(res))
    .catch(err => console.log(err));
    // fetch('',{method:'GET', credentials: 'include'})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }
  return (
    <div className='loginContainer'>
      <ToastContainer />
      <div className='loginHeading'><div onClick={dataHandler}>get data</div>
        <h1 className='headingText'>Login to <span className='companyName'>Clean</span></h1>
      </div>
      <div className='loginBody'>
        <form onSubmit={submitHandler}>
          <TextField type="text" placeholder="Enter Email" label="Email" id='email' />
          <PasswordField placeholder="Enter Password" label="Password" id='password' />
          <Button type='submit' label='Login' className='btn-medium' isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}
export default LoginForm;