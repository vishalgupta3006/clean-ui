import { useState } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";
import {Link, useHistory} from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import Button from "../reusable/input/Button/Button";
import EmailField from "../reusable/input/EmailField/EmailField";
import NumberField from "../reusable/input/NumberField/NumberField";
import PasswordField from "../reusable/input/PasswordField/PasswordField";
// import TextareaField from "../reusable/input/TextareaField/TextareaField";
import TextField from "../reusable/input/TextField/TextField";
import './RegisterForm.scss';
import CompanyLogo from "../reusable/CompanyLogo/CompanyLogo";
const RegisterForm: React.FC = () => {
  // const [confirmPasswordError, setConfirmPasswordError] = useState('');
  // const confirmPasswordCheck = (e:any) => {
  //   const password = (document.getElementById('password') as HTMLInputElement).value;
  //   const confirmPassword = (e.target as HTMLInputElement).value;
  //   if(confirmPassword !== password){
  //     setConfirmPasswordError('Password does not match')
  //   }
  //   else{
  //     setConfirmPasswordError('')
  //   }
  // }
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const history = useHistory();
  const registrationHandler = (userDetails: Object) => {
    const requestOptions = {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    }
    axios.post('http://localhost:8080/api/register', userDetails, requestOptions)
    .then(res => {
      if(res.status === 200){
        history.push('/login');
        toast.error("Something went wrong from our end");
      }
      else
        toast.error("Something went wrong from our end");
      setIsCreatingUser(false);
    })
    .catch(err => {
      toast.error("User Already Exists")
      setIsCreatingUser(false);
    });
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    const userDetails = {
      FirstName: e.target[0].value,
      LastName: e.target[1].value,
      EmailAddress: e.target[2].value,
      PhoneNumber: e.target[3].value,
      Country: e.target[4].value,
      Age: e.target[5].value,
      password: e.target[6].value
    }
    if(!userDetails.FirstName) return toast.error('Enter The First Name');
    if(!userDetails.LastName) return toast.error('Enter The Last Name');
    if(!userDetails.EmailAddress) return toast.error('Enter The Email Address');
    if(!userDetails.PhoneNumber) return toast.error('Enter The Phone Number');
    if(!userDetails.Country) return toast.error('Enter The Country');
    if(!userDetails.Age) return toast.error('Enter The Age');
    if(!userDetails.password) return toast.error('Enter The password');
    setIsCreatingUser(true);
    registrationHandler(userDetails);
  }
  return (
    <div className='registerContainer'>
      <ToastContainer />
      <div className='registerHeading'>
        <h1 className='headingText'>Register on <CompanyLogo /></h1>
      </div>
      <div className='formBodyContainer'>
        <form className={isMobile ? 'mobileVersion' : 'desktopVersion'} onSubmit={submitHandler}>
          <TextField label='First Name' placeholder='Enter First Name' maxLength={16} mandatory />
          <TextField label='Last Name' placeholder='Enter Last Name' maxLength={16} mandatory/>
          <EmailField label='Email Address' placeholder='Enter Email Address' mandatory />
          <TextField label='Phone Number' placeholder='Enter Phone Number' maxLength={10} mandatory />
          <TextField label='Country' placeholder='Enter Country' mandatory/>
          <NumberField label='Age' placeholder='Enter Age' maxVal={100} minVal={18} mandatory />
          <PasswordField label='Password' placeholder='Enter Password' id='password' mandatory />
          <PasswordField label='Confirm Password' placeholder='Confirm Your Password' mandatory />
          {/* <TextareaField label='ssassaasa' placeholder={'fcgderx'}/> */}
          <div className='submitButtonContainer'>
            <Button type='submit' label='Create an account' className='btn-medium' isLoading={isCreatingUser} />
          </div>
        </form>
      </div>
      <div className='registerContainerFooter'>
        Already have an Account? <Link to='/Login' className='loginLink'>Login </Link>
      </div>
    </div>
  )
}
export default RegisterForm;
