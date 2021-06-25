import { combineReducers } from "redux";
import { SUBMIT_NEW_CONTACT, HANDLE_DELETE } from "./contactFormActions";

const itemsReducer = (
 state = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
 ],
 action
) => {
 switch (action.type) {
  case SUBMIT_NEW_CONTACT:
   return [...state, action.payload];

  case HANDLE_DELETE:
   return state.filter((contact) => contact.id !== action.payload);

  default:
   return state;
 }
};

const errorReduser = (state = "", action) => {
 return state;
};

const contactFormCartReduser = combineReducers({
 items: itemsReducer,
 error: errorReduser,
});

export default contactFormCartReduser;
