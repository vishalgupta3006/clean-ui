import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './PasswordField.scss';
import { useState } from 'react';
import passwordValidationCheck from '../../../../utils/passwordValidationCheck';

interface Props {
  placeholder?: string,
  className?: string,
  label?: string,
  id?: string,
  onclickhandler?: () => {}
}
const PasswordField: React.FC<Props> = (props) => {
  const { placeholder,
    className = "default",
    label = "",
    id = "",
    onclickhandler = () => { },
  } = props;

  const [type, setType] = useState('password');
  const [error, setError] = useState('');

  const passwordToggle = () => {
    (type === 'password') ? setType('text') : setType('password');
  }

  const onValueChange = (e: any) => {
    if (passwordValidationCheck(e.target.value))
      return setError('');
    else
      return setError('Password must be between 8 to 15 characters long which includes at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
  }
  return (
    <div>
    <div className='passwordField' onClick={() => onclickhandler()}>
      <label className='inputFieldLabel'> {label}
        <input type={type}
          placeholder={placeholder}
          className={className}
          id={id}
          onChange={onValueChange}
        />
      </label>
      <IconContext.Provider value={{ className: 'passwordIcon' }}>
        <div className='passwordIconContainer' onClick={passwordToggle}>
          {(type === 'password') ? <FaEye /> : <FaEyeSlash />}
        </div>
      </IconContext.Provider>
    </div>
    <div className='passwordValidatorError'>{error}</div>
    </div>
  );
}
export default PasswordField;