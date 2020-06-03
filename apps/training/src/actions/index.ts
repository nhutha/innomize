import ActionType from "../constants/ActionType";
import {callAPI} from "../utils/callAPI";
export const selected = (payload)=>{
  return {
    type : ActionType.SELECTED,
    payload
  }
}


export const getData = (data)=>{
  return {
    type : ActionType.GET_DATA,
    payload : data
  }
}

export const getDataAPI = ()=>{
  return dispatch =>{
    return callAPI("post","GET").then(res=>{
      dispatch(getData(res.data))

    }).catch(err=>{
      console.log("err",err);
    })
  }
}


export const changeMyPost = ()=>{
  return {
    type : ActionType.CHANGE_MY_POST
  }
}

export const changeComplete = ()=>{
  return {
    type :ActionType.CHANGE_COMPLETED
  }
}

export const changStatus = ()=>{
  return {
    type : ActionType.CHANGE_STATUS
  }
}
