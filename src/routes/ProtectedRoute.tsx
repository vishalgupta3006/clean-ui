import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { StoreType } from "../store/types";
import { useHistory } from 'react-router-dom';
import LoadingScreen from "../components/reusable/LoadingScreen/LoadingScreen";
import React from "react";
interface Props {
  component: React.FC,
  path: string,
  exact: boolean
}
const ProtectedRoute:React.FC<Props> = (props) => {
  const history = useHistory();
  const { isLoggedIn, isLoaded } = useSelector((state: StoreType) => state.authenticationReducer);

  if (isLoaded && !isLoggedIn)
    history.push('/login')
  else if (isLoaded && isLoggedIn)
    return <Route {...props} />
  return <LoadingScreen />
}

export default ProtectedRoute;