import { useState } from 'react';
import './TextField.scss';
interface Props {
  type?: string,
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  onclickhandler?: () => {},
  maxLength?: number,
  autoComplete?: boolean
}
const TextField: React.FC<Props> = (props) => {
  const {
    type = "text",
    placeholder,
    className = "default",
    label = "", id = "",
    onclickhandler = () => { },
    maxLength = 2 ** 10,
    autoComplete = true
  } = props;

  const [error, setError] = useState('');
  const onValueChange = (e: any) => {
    if (e.target.value.length > maxLength)
      return setError(`Length can not be greater than ${maxLength}`);
    else
      return setError('');
  }
  return (
    <div className='inputField' onClick={() => onclickhandler()}>
      <label className='inputFieldLabel'> {label}
        <span className='validationError'>{error}</span>
        <input
          type={type}
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
export default TextField;