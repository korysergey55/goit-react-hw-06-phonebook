import { FILTER } from "./filterActions";
import { combineReducers } from "redux";

const filterItemsReducer = (state = '', action) => {
 switch (action.type) {
  case FILTER:
     return action.payload ;

  default:
    return state;
 }
}

const filterItemsError = (state ="", action) => {
 return state;
}

const filterReducer = combineReducers({
 items: filterItemsReducer,
 error: filterItemsError,
});

export { filterReducer };