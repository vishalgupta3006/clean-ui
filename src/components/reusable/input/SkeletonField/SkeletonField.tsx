import React, { ReactElement, useState } from 'react';
import './SkeletonField.scss';
interface Props {
  type?: string,
  placeholder?: string,
  className?: string,
  label?: string,
  id?: string,
  disableAutoComplete?: boolean,
  disableErrorControl?: boolean,
  mandatory?: boolean,
  errorMessage?: string,
  onValueChange?: any,
  inputFieldIcon?: ReactElement
}
const SkeletonField: React.FC<Props> = (props) => {
  const {
    type = 'text',
    placeholder,
    className,
    label,
    id,
    onValueChange,
    disableAutoComplete = false,
    disableErrorControl = false,
    errorMessage,
    mandatory = false,
    inputFieldIcon
  } = props;

  const [value, setValue] = useState('');
  const onChangeHandler = (e:any) => {
    setValue(e.target.value)
    if(onValueChange)
      onValueChange(e)
  }
  return (
    <div className='inputField'>
      <label className='inputFieldLabel' onClick={(e) => e.stopPropagation()}>
        <div className='fieldHeading'>
          <div className='labelContent'>{label} </div>
          <div className='asteriskMark'>{mandatory && '*'}</div>
        </div>
        <div className='inputFieldArea'>
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            id={id}
            autoComplete={disableAutoComplete ? 'off' : 'on'}
            value = {value}
            onChange = {onChangeHandler}
          />
          {inputFieldIcon &&
            <div className='inputIconContainer' >
              {inputFieldIcon}
            </div>}
        </div>
      </label>
      {!disableErrorControl && <div className='validationError'>{errorMessage}</div>}
    </div>
  );
}
export default SkeletonField;