import ActionType from "../constants/ActionType";
export const selected = ()=>{
  return {
    type : ActionType.SELECTED,
    payload : 1
  }
}
