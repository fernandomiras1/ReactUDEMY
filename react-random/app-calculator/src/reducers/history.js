import { ADD_HISTORY_ITEM } from '../actions/history';

const DEFAULT_STATE = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEM: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}