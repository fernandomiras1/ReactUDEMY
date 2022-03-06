export const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';

const parseExpr = (expr) => {
  
  const operator = ['/', '*', '-', '+'].find(x => expr.includes(x))
  if (operator) {
    const position = expr.indexOf(operator) + 1;

    if (position === expr.length) {
      const number = expr.slice(0 , expr.indexOf(operator));
      const newExpr = number + operator + number
      // eslint-disable-next-line no-eval
      return { result: eval(newExpr), expr: newExpr }
    }
  }

  // eslint-disable-next-line no-eval
  return { result: eval(expr), expr }
}

export const addHistoryItem = (expr) => ({
  type: ADD_HISTORY_ITEM,
  payload: {
    expr: parseExpr(expr).expr,
    result: parseExpr(expr).result
  }
})
