import './Button.scss';
interface Props{
  type: 'button' | 'submit' | 'reset',
  label: string,
  className?: string,
  onclickhandler?: any
}
const Button = (props:Props) => {
    const { type = "button", label = "", className = "default", onclickhandler=()=>{}} = props;
    return (
        <div className='buttonWrapper'>
            <button type={type} className={className} onClick={(e:any)=>onclickhandler(e)}>{label}</button>
        </div>
    );
}

export default Button;