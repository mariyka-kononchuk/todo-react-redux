export const getTodos = state => state.todos.items.filter((todo => todo.status === 'active'));
