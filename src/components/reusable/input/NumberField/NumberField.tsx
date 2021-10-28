import { useState } from 'react';
import SkeletonField from '../SkeletonField/SkeletonField';
import './NumberField.scss';
interface Props {
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  minVal?: number,
  maxVal?: number,
  disableAutoComplete?:boolean,
  disableErrorControl?: boolean,
  mandatory?: boolean
}

const NumberField: React.FC<Props> = (props: Props) => {
  const {
    minVal = Number.MIN_SAFE_INTEGER,
    maxVal = Number.MAX_SAFE_INTEGER,
   } = props;

  const [errorMessage, setErrorMessage] = useState('');
  const onValueChange = (e: any) => {
    if(e.target.value > maxVal || e.target.value < minVal)
      return setErrorMessage(`Value should be in range of ${minVal} to ${maxVal}`);
    else
      return setErrorMessage('');
  }
  return (
    <SkeletonField {...props} type='number' onValueChange={onValueChange} errorMessage={errorMessage} />
  );
}
export default NumberField;