import axios from "axios";
import {ApiParams} from "../api/types";

const base_url = 'https://clean-crm.herokuapp.com/';

export const axiosApi = (apiParams: ApiParams) => {
  const { method, url, body, headers, withCredentials = false } = apiParams;
  return axios({
    method,
    url: `${base_url}${url}`,
    headers,
    withCredentials,
    data: body
  })
}