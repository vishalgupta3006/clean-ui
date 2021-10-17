import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './PasswordField.scss';
import { useState } from 'react';
interface Props {
  placeholder?: string,
  className?: string,
  label?: string,
  id?: string,
  onclickhandler?: () => {}
}
const PasswordField = (props: Props) => {
  const { placeholder, className = "default", label = "", id = "", onclickhandler = () => { } } = props;
  const [type, setType] = useState('password');

  const passwordToggle = () => {
    (type === 'password') ? setType('text') : setType('password');
    console.log(type)
  }

  return (
    <div className='inputField' onClick={() => onclickhandler()}>
      <label htmlFor={id} className='inputFieldLabel'>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={className} id={id} autoComplete="on" />
      <IconContext.Provider value={{ className: 'passwordIcon' }}>
        <div className='passwordIconContainer' onClick={passwordToggle}>
          {(type === 'password') ? <FaEye /> : <FaEyeSlash />}
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default PasswordField;