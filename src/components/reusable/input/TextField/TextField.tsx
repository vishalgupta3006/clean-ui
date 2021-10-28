import { useState } from 'react';
import SkeletonField from '../SkeletonField/SkeletonField';
import './TextField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  maxLength?: number,
  autoComplete?: boolean,
  disableErrorControl?: boolean,
  mandatory?: boolean
}
const TextField: React.FC<Props> = (props) => {
  const maxLength = props.maxLength ? props.maxLength : 2 ** 10;

  const [errorMessage, setErrorMessage] = useState('');
  const onValueChange = (e: any) => {
    if (e.target.value.length > maxLength)
      return setErrorMessage(`Length can not be greater than ${maxLength}`);
    else
      return setErrorMessage('');
  }
  return (
    <SkeletonField {...props} onValueChange={onValueChange} errorMessage={errorMessage}/>
  );
}
export default TextField;