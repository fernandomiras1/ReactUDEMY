export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_NUMBER = 'ADD_NUMBER';
export const RESTORE_EXPRESSION = 'RESTORE_EXPRESSION';

export const toExpression = (type, payload) => ({
  type,
  payload
});

export const opToExpression = (op) => toExpression(ADD_OPERATION, op);
export const numToExpression = num => toExpression(ADD_NUMBER, num);

export const restoreExpression = (payload) => ({
  type: RESTORE_EXPRESSION,
  payload,
});