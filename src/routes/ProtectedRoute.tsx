import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { StoreType } from "../store/types";
import { useHistory } from 'react-router-dom';
import LoadingScreen from "../components/reusable/LoadingScreen/LoadingScreen";
interface Props {
  component: React.Component,
}
const ProtectedRoute = (props: Props) => {
  const {
    component,
    ...rest
  } = props;
  const history = useHistory();
  const { isLoggedIn, isLoaded } = useSelector((state: StoreType) => state.authenticationReducer);

  if (isLoaded && !isLoggedIn)
    history.push('/login')
  else if (isLoaded && isLoggedIn)
    return <Route {...rest}>
      {component}
    </Route>
  return <LoadingScreen />
}

export default ProtectedRoute;