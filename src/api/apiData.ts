import apiEndPoint from "./apiEndpoints";
import {ApiParams} from "./types";

interface ApiData{
  login: ApiParams,
  register: ApiParams,
  isLoggedIn: ApiParams,
  allLeads: ApiParams
}
const apiData:ApiData ={
  login:{
    method: 'POST',
    url: apiEndPoint.login,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  },
  register:{
    method: 'POST',
    url: apiEndPoint.register,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  },
  isLoggedIn:{
    method: 'GET',
    url: apiEndPoint.isLoggedIn,
    withCredentials: true
  },
  allLeads:{
    method: 'GET',
    url: apiEndPoint.allLeads,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
  }
}
export default apiData;