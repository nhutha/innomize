import axios from "axios";
import {URL_API} from "../constants/API"
export const callAPI = (endPoint,method,body="")=>{
  return axios({
    url : `${URL_API}/${endPoint}`,
    method,
    data : body
  })
}
