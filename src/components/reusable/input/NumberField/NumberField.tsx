import { useState } from 'react';
import './NumberField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  onclickhandler?: () => {},
  minVal?: number,
  maxVal?: number,
  autoComplete?:boolean
}

const NumberField: React.FC<Props> = (props: Props) => {
  const {
    placeholder,
    className = "default",
    label = "",
    id = "",
    onclickhandler = () => { },
    minVal = Number.MIN_SAFE_INTEGER,
    maxVal = Number.MAX_SAFE_INTEGER,
    autoComplete = true
   } = props;

  const [error, setError] = useState('');
  const onValueChange = (e: any) => {
    if(e.target.value > maxVal || e.target.value < minVal)
      return setError(`Value should be in range of ${minVal} to ${maxVal}`);
    else
      return setError('');
  }
  return (
    <div className='inputField' onClick={() => onclickhandler()}>
      <label className='inputFieldLabel'> {label} <span className='validationError'>{error}</span>
        <input type='number'
        placeholder={placeholder} 
        className={className} 
        id={id} 
        autoComplete={autoComplete?'on':'off'}
        onChange={onValueChange}/>
      </label>
    </div>
  );
}
export default NumberField;