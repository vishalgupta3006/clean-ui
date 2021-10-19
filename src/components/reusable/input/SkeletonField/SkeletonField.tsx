import React, { ReactElement } from 'react';
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
  onclickhandler?: any,
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
    onclickhandler,
    onValueChange,
    disableAutoComplete = false,
    disableErrorControl = false,
    errorMessage,
    mandatory = false,
    inputFieldIcon
  } = props;

  return (
    <div className='inputField' onClick={onclickhandler}>
      <label className='inputFieldLabel'>
        <div className='fieldHeading'>
          <div className='labelContent'>{label} </div>
          <div className='asteriskMark'>{mandatory ? '*' : ''}</div>
        </div>
        <div className='inputFieldArea'>
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            id={id}
            autoComplete={disableAutoComplete ? 'off' : 'on'}
            onChange={(e) => {
              onValueChange(e)
            }}
          />
          {inputFieldIcon &&
            <div className='inputIconContainer' >
              {inputFieldIcon}
            </div>}
        </div>
      </label>
      {disableErrorControl ? <></> : <div className='validationError'>{errorMessage}</div>}
    </div>
  );
}
export default SkeletonField;