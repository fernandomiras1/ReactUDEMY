export const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';

export const addHistoryItem = (expr) => ({
  type: ADD_HISTORY_ITEM,
  payload: {
    expr,
    // eslint-disable-next-line no-eval
    result: eval(expr)
  }
})