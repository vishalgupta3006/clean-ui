import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './PasswordField.scss';
import { useState } from 'react';
import passwordValidationCheck from '../../../../utils/passwordValidationCheck';
import SkeletonField from '../SkeletonField/SkeletonField';

interface Props {
  placeholder?: string,
  className?: string,
  label?: string,
  id?: string,
  onclickhandler?: any,
  disableErrorControl?: boolean,
  onValueChange?:any,
  mandatory?: boolean
}
const PasswordField: React.FC<Props> = (props) => {
  const onValueChange = props.onValueChange;
  const [type, setType] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');

  const passwordToggle = () => {
    (type === 'password') ? setType('text') : setType('password');
  }

  const errorHandler = (e: any) => {
    if (passwordValidationCheck(e.target.value))
      return setErrorMessage('');
    else
      return setErrorMessage('Password must be between 8 to 15 characters long which includes at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
  }
  const PasswordIcon = () => {
    return (<IconContext.Provider value={{ className: 'passwordIcon' }}>
    <div className='passwordIconContainer' onClick={passwordToggle}>
      {(type === 'password') ? <FaEye /> : <FaEyeSlash />}
    </div>
  </IconContext.Provider>)
  }
  return (
    <div className='passwordField'>
      <SkeletonField
      type={type}
      {...props}
      inputFieldIcon = {<PasswordIcon/> }
      errorMessage={errorMessage}
      onValueChange={onValueChange? onValueChange: errorHandler} 
      />
    </div>
  );
}
export default PasswordField;