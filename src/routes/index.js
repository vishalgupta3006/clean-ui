import axios from 'axios';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Redirect, Route } from 'react-router';
import Dashboard from '../components/dashboard/dashboard';
import Login from '../components/login/Login';
import { isDesktop } from 'react-device-detect';
import LoginMobile from '../components/login/LoginMobile';
import Register from '../components/register/Register';
import RegisterMobile from '../components/register/RegisterMobile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn, userLoggedOut } from '../store/action/authentication';
import ProtectedRoute from './ProtectedRoute'
import GuestOnlyRoute from './GuestOnlyRoute';
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = useSelector(state => state.authenticationReducer.isLoggedIn);
//   const history = useHistory();
//   //if(!isLoggedIn) history.push('/login');
//   return isLoggedIn && <Route {...rest}>
//     {Component}
//   </Route>
// }
// const guestRoute = ({ component: Component, ...rest }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const history = useHistory();
//   const isAuth = () => {
//     return axios.get('http://localhost:8080/api/auth/isLoggedIn', { withCredentials: true })
//   }
//   isAuth().then(
//     res => {
//       if (res.data) setIsLoggedIn(true);
//       else history.push('/login');
//     }
//   )
//   return isLoggedIn && <Route {...rest}>
//     {Component}
//   </Route>
// }

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isAuth = async () => {
      const response = await axios.get('http://localhost:8080/api/auth/isLoggedIn', { withCredentials: true });
      if (response.data === true) dispatch(userLoggedIn());
      else dispatch(userLoggedOut());
    }
    isAuth();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <GuestOnlyRoute exact path="/login" component={isDesktop ?Login : LoginMobile} />
        <GuestOnlyRoute exact path="/register" component={isDesktop ?Register : RegisterMobile} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;