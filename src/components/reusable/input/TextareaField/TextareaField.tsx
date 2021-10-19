import './TextareaField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label?: string,
  id?: string,
  disableAutoComplete?: boolean,
  disableErrorControl?: boolean,
  mandatory?: boolean,
  errorMessage?: string,
  onclickhandler?: any,
  onValueChange?: any
}
const TextareaField: React.FC<Props> = (props) => {
  const {
    placeholder,
    className,
    label,
    id,
    disableAutoComplete,
    disableErrorControl,
    mandatory,
    errorMessage,
    onclickhandler,
    onValueChange
  } = props;
  return (
    <div className='inputField'>
      <label className='inputFieldLabel'>
        <div className='fieldHeading'>
          <div className='labelContent'>{label} </div>
          <div className='asteriskMark'>{mandatory ? '*' : ''}</div>
        </div>
        <textarea
          placeholder={placeholder}
          className={className}
          id={id}
          autoComplete={disableAutoComplete ? 'off' : 'on'}
          onChange={(e) => {
            onValueChange(e)
          }}
          onClick={onclickhandler}
        />
      </label>
      {disableErrorControl ? <></> : <div className='validationError'>{errorMessage}</div>}
    </div>
  )
}

export default TextareaField;