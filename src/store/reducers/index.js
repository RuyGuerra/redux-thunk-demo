import { combineReducers } from 'redux';
import selectTerm from './selectTerm';
import postsByTerm from './postsByTerm';

const rootReducer = combineReducers({
  selectTerm,
  postsByTerm
})

export default rootReducer;
