import ActionType from "../constants/ActionType";
const initialState =0;

const myReducers = (state = initialState,action)=>{
  switch(action.type){
    case ActionType.SELECTED:{
      state = state + action.payload
      return
    }

    default: return state;
  }
}

export default myReducers;
