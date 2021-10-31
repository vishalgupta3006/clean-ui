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
import ProtectedRoute from './ProtectedRoute';
import GuestOnlyRoute from './GuestOnlyRoute';

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
        <ProtectedRoute exact path="/leads" component={<div>Leads</div>}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;