export const getActiveTodos = state => state.todos.items.filter((todo => todo.status === 'active'));
export const getArchiveTodos = state => state.todos.items.filter((todo => todo.status === 'archived'));
export const getEditItem = state => state.todos.editItem