import { combineReducers } from "redux";
import authenticationReducer from './authenticationReducer';
import leadsReducer from "../../components/leads/leadsReducer";
const rootReducer = combineReducers({
  authenticationReducer,leadsReducer
});
export default rootReducer;