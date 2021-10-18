import { useState } from 'react';
import emailValidator from '../../../../utils/emailValidationCheck';
import './EmailField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  onclickhandler?: () => {}
  autoComplete?: boolean
}
const EmailField: React.FC<Props> = (props) => {
  const {
    placeholder,
    className = "default",
    label = "", id = "",
    onclickhandler = () => { },
    autoComplete = true
  } = props;

  const [error, setError] = useState('');
  const onValueChange = (e: any) => {
    if (emailValidator(e.target.value))
      return setError('');
    else
      return setError('Invalid Email Address')
  }
  return (
    <div className='emailField' onClick={() => onclickhandler()}>
      <label className='inputFieldLabel'> {label}
        <span className='validationError'>{error}</span>
        <input
          type='email'
          placeholder={placeholder}
          className={className}
          id={id}
          autoComplete={autoComplete ? 'on' : 'off'}
          onChange={onValueChange}
        />
      </label>
    </div>
  );
}
export default EmailField;