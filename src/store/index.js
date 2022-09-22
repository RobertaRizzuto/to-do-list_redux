import { combineReducers, createStore } from "redux";

const InitialState = {
  input: {
    value: "",
  },
  listArray: {
    data: [],
  },
};

const inputReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, value: action.payload };

    case "SET_INPUT_VALUE_TO_EMPTY":
      return { ...state, value: "" };

    default:
      return state;
  }
};

const listArrayReducer = (state = {}, action) => {
    switch (action.type) {
      case "SET_ARRAY_DATA":
        return { ...state, data: action.payload };
  
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({input: inputReducer, listArray: listArrayReducer})
 const store = createStore(rootReducer, InitialState)
export default store;
