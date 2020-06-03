import ActionType from "../constants/ActionType";
const initialState = [];

const myReducers = (state = initialState,action)=>{
  switch(action.type){
    case ActionType.GET_DATA:{
      state = action.payload;
      return state;
    }

    default: return state;
  }
}

export default myReducers;
