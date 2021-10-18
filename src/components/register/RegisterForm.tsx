import { isMobile } from "react-device-detect";
import { ToastContainer } from "react-toastify";
import Button from "../reusable/input/Button/Button";
import EmailField from "../reusable/input/EmailField/EmailField";
import NumberField from "../reusable/input/NumberField/NumberField";
import PasswordField from "../reusable/input/PasswordField/PasswordField";
import TextField from "../reusable/input/TextField/TextField";
import './RegisterForm.scss';
const RegisterForm = () => {
  return (
    <div className='registerContainer'>
      <ToastContainer />
      <div className='registerHeading'>
        <h1 className='headingText'>Register on <span className='companyName'>Clean</span></h1>
      </div>
      <div className='formBodyContainer'>
        <form className={isMobile?'mobileVersion': 'desktopVersion'}>
        <TextField label='First Name' placeholder='Enter First Name' maxLength={16}/>
        <TextField label='Last Name' placeholder='Enter last Name' maxLength={16} />
        <EmailField label='Email Address' placeholder='Enter Email Address' />
        <TextField type='tel' label='Phone Number' placeholder='Enter Phone Number' maxLength={10}/>
        <TextField label='Country' placeholder='Enter Country' />
        <NumberField label='Age' placeholder='Enter Age' maxVal={100} minVal={18}/>
        <PasswordField label='Password' placeholder='Enter Password' />
        <PasswordField label='Confirm Password' placeholder='Confirm Your Password'  />
        </form>
      </div>
      <div>
        <Button type='button' label='input' className='btn-medium' />
      </div>
    </div>
  )
}
export default RegisterForm;
