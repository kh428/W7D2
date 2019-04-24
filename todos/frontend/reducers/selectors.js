
export const allTodos = state => {
  const newTodos = [];
  Object.keys(state.todos).map ( (todoKey) => newTodos[todoKey] = state.todos[todoKey]);
  return newTodos;
};



