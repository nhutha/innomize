import ActionType from "../constants/ActionType";
const initialState = {
  myPost : false,
  completed : false,
  status : 1
};

const myReducers = (state = initialState,action)=>{
  switch(action.type){
    case ActionType.CHANGE_COMPLETED:{
      state = {
        ...state,
        completed : !state.completed
      };
      return state;
    }
    case ActionType.CHANGE_STATUS:{
      state = {
        ...state,
        status : state.status === 1 ? 2 :1
      };
      return state;
    }
    case ActionType.CHANGE_MY_POST:{
      state = {
        ...state,
        myPost : !state.myPost
      };
      return state;
    }



    default: return state;
  }
}

export default myReducers;
