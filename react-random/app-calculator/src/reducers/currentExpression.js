import { ADD_OPERATION, ADD_NUMBER,RESTORE_EXPRESSION } from '../actions/currentExpression';
import { ADD_HISTORY_ITEM } from '../actions/history';

const DEFAULT_STATE = '';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_OPERATION:
      return state + action.payload;

    case ADD_NUMBER:
      return state + action.payload;

    case ADD_HISTORY_ITEM: 
      return '';

    case RESTORE_EXPRESSION:
      
      return action.payload;

    default:
      return state;
  }
}