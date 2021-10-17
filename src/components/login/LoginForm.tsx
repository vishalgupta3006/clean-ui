import './LoginForm.scss';
import Button from "../reusable/input/Button/Button";
import InputField from "../reusable/input/InputText/InputText";

const LoginForm = () => {
  const loginHandler = (e:any) => {
    e.preventDefault();
    console.log(e)
  }
  return(
    <div className='loginContainer'>
        <div className='loginHeading'>
          <h1 className='headingText'>Login to <span className='companyName'>Clean</span></h1>
        </div>
        <div className='loginBody'>
          <form>
          <InputField type="email" placeholder="Enter Email" label="Email" id='email'/>
          <InputField type="password" placeholder="Enter Password" label="Password" id='password'/>
          <Button type='submit' label='Login' onclickhandler={(e:any) => loginHandler(e)} className='btn-medium'/>
          </form>
        </div>
      </div>
  );
}
export default LoginForm;