import {combineReducers} from 'redux';
import contactFormReducer from '../redux/contactForm/contactFormReducer';
import { filterReducer } from './filter/filterReduser';

const rootReducer = combineReducers({
 contacts: contactFormReducer,
 filter: filterReducer,
});

export default rootReducer;
