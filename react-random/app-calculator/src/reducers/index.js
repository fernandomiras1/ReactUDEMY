import { combineReducers } from 'redux';
import history from './history';
import currentExpression from './currentExpression';

export default combineReducers({
  history,
  currentExpression,
});