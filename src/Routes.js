import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/Login';
import { isDesktop } from 'react-device-detect';
import LoginMobile from './components/login/LoginMobile';
import Register from './components/register/Register';
import RegisterMobile from './components/register/RegisterMobile';

const isAuth = () => {
  return axios.get('http://localhost:8080/api/auth/isLoggedIn',{withCredentials: true})
}

isAuth().then(
  res => console.log(res)
)
.catch(err => console.log(err))

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest}>

    {Component}
  </Route>
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
          {/* <Dashboard />
        </ProtectedRoute> */}
        <Route exact path="/login">
          {isDesktop?<Login />:<LoginMobile />}
        </Route>
        <Route exact path="/register">
          {isDesktop?<Register />:<RegisterMobile />}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;