import { useState } from 'react';
import emailValidator from '../../../../utils/emailValidationCheck';
import SkeletonField from '../SkeletonField/SkeletonField';
import './EmailField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  disableAutoComplete?: boolean,
  disableErrorControl?: boolean,
  mandatory?: boolean
}
const EmailField: React.FC<Props> = (props) => {

  const [errorMessage, setErrorMessage] = useState('');
  const onValueChange = (e: any) => {
    if (emailValidator(e.target.value))
      return setErrorMessage('');
    else
      return setErrorMessage('Invalid Email Address')
  }
  return (
    <SkeletonField 
    type='email' 
    onValueChange={onValueChange}
    errorMessage={errorMessage}
    {...props}
    />
  );
}
export default EmailField;