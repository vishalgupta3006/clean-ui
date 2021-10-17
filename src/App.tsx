import './App.css';
import { isDesktop } from 'react-device-detect';
import Login from './components/login/Login';
import LoginMobile from './components/login/LoginMobile';

const App = () => {
  return(
    <div>
      {
        isDesktop? <Login/>: <LoginMobile/>
      }
    </div>
  )
}

export default App;
