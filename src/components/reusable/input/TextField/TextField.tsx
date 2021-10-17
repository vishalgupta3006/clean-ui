import  './TextField.scss';
interface Props{
  type?: string,
  placeholder?: string,
  className?: string,
  label: string,
  id?: string,
  onclickhandler?: ()=>{}
}
const textField = (props:Props) => {
  const { type = "text", placeholder, className = "default", label = "", id = "", onclickhandler = () => { } } = props;
  return (
      <div className='inputField' onClick={() => onclickhandler()}>
          <label className='inputFieldLabel'> {label}
              <input type={type} placeholder={placeholder} className={className} id={id} autoComplete="on"/>
          </label>
      </div>
  );
}
export default textField;