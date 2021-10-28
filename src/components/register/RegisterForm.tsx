import { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../reusable/input/Button/Button";
import EmailField from "../reusable/input/EmailField/EmailField";
import NumberField from "../reusable/input/NumberField/NumberField";
import PasswordField from "../reusable/input/PasswordField/PasswordField";
import TextareaField from "../reusable/input/TextareaField/TextareaField";
import TextField from "../reusable/input/TextField/TextField";
import './RegisterForm.scss';
const RegisterForm:React.FC = () => {
  let [confirmPasswordError, setConfirmPasswordError] = useState('');
  const confirmPasswordCheck = (e:any) => {
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (e.target as HTMLInputElement).value;
    if(confirmPassword !== password){
      setConfirmPasswordError('Password does not match')
    }
    else{
      setConfirmPasswordError('')
    }
  }
  return (
    <div className='registerContainer'>
      <ToastContainer />
      <div className='registerHeading'>
        <h1 className='headingText'>Register on <span className='companyName'>Clean</span></h1>
      </div>
      <div className='formBodyContainer'>
        <form className={isMobile ? 'mobileVersion' : 'desktopVersion'} >
          <TextField label='First Name' placeholder='Enter First Name' maxLength={16} mandatory/>
          <TextField label='Last Name' placeholder='Enter Last Name' maxLength={16} />
          <EmailField label='Email Address' placeholder='Enter Email Address' />
          <TextField label='Phone Number' placeholder='Enter Phone Number' maxLength={10} />
          <TextField label='Country' placeholder='Enter Country' />
          <NumberField label='Age' placeholder='Enter Age' maxVal={100} minVal={18} className='error'/>
          <PasswordField label='Password' placeholder='Enter Password' id='password' mandatory  />
          <PasswordField label='Confirm Password' placeholder='Confirm Your Password' onValueChange={confirmPasswordCheck} errorMessage={confirmPasswordError}/>
          <TextareaField label='ssassaasa' placeholder={'fcgderx'}/>
        </form>
      </div>
      <div>
        <Button type='button' label='Create an account' className='btn-medium' />
      </div>
      <div className='registerContainerFooter'>
        Already have an Account? <Link to='/Login' className='loginLink'>Login </Link>
      </div>
    </div>
  )
}
export default RegisterForm;
