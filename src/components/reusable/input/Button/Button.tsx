import {  FaSpinner } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Button.scss';
interface Props{
  type: 'button' | 'submit' | 'reset',
  label: string,
  className?: string,
  onclickhandler?: any,
  isLoading?: boolean,
  isDisabled?: boolean
}
const Button = (props:Props) => {
    const { type = "button", label = "", className = "default", onclickhandler=()=>{}, isLoading = false, isDisabled = false } = props;
    return (
        <div className='buttonWrapper'>
            <button type={type} className={className} onClick={(e:any)=>onclickhandler(e)} disabled={isLoading || isDisabled}>
            {
                isLoading ?<IconContext.Provider value={{ className: 'loader' }}>
                <div><FaSpinner /></div>
              </IconContext.Provider>: label
            }
            </button>
        </div>
    );
}

export default Button;