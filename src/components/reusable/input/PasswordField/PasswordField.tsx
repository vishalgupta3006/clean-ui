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
  disableErrorControl?: boolean,
  onValueChange?: any,
  mandatory?: boolean,
  errorMessage?: string
}
const PasswordField: React.FC<Props> = (props) => {
  const onValueChange = props.onValueChange;
  const parentErrorMessage = props.errorMessage;
  const [type, setType] = useState('password');
  const [errorMessage, setErrorMessage] = useState(parentErrorMessage);

  const passwordToggle = (e: any) => {
    // e.stopPropagation();
    (type === 'password') ? setType('text') : setType('password');
  }

  const errorHandler = (e: any) => {
    if (!passwordValidationCheck(e.target.value))
      return setErrorMessage('Password must be between 8 to 15 characters long which includes at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    else if (parentErrorMessage)
      return setErrorMessage(parentErrorMessage);
    else
      return setErrorMessage('')
  }
  const PasswordIcon = () => {
    return (<IconContext.Provider value={{ className: 'passwordIcon' }}>
      <div className='passwordIconContainer' onClick={passwordToggle}>
        {(type === 'password') ? <FaEye /> : <FaEyeSlash />}
      </div>
    </IconContext.Provider>)
  }
  const valueChangeHandler = (e: any) => {
    if (onValueChange)
      onValueChange(e)
    else
      errorHandler(e);
  }
  return (
    <div className='passwordField'>
      <SkeletonField
        type={type}
        {...props}
        inputFieldIcon={<PasswordIcon />}
        errorMessage={errorMessage}
        onValueChange={valueChangeHandler}
      />
    </div>
  );
}
export default PasswordField;