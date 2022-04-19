import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//import ITodo from '../../interfaces/todo.interface';
import data from '../../data/todos.json';
import {
    addTodo,
    deleteTodo,
    deleteAllTodo,
    archiveTodo,
    editTodo,
    unpackTodo,
    addEditItem,
    deleteEditItem,
} from './todo-action'

const items = createReducer(data, {
    [addTodo]: (state, { payload }) => [payload, ...state],
    [deleteTodo]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [deleteAllTodo]: (state) => [],
    [archiveTodo]: (state, { payload }) =>
        state.map(todo =>
            todo.id === payload ? { ...todo, status: 'archived' } : todo,
        ),
    [unpackTodo]: (state, { payload }) =>
        state.map(todo =>
            todo.id === payload ? { ...todo, status: 'active' } : todo,
        ),
    [editTodo]: (state, { payload }) =>
        state.map(todo =>
            todo.id === payload.id ?
                {
                    ...todo,
                    name: payload.name,
                    category: payload.category,
                    content: payload.content,
                    dates: payload.dates,
                }
                : todo,
        )
});


const initialState = {isEdited:false};
const editItem = createReducer(initialState, {
    [addEditItem]: (state, { payload }) => payload,
    [deleteEditItem]: (state, { _ }) => initialState,
});

export default combineReducers({
    items,
    editItem
});
