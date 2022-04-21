import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import ITodo from '../../interfaces/todo.interface';
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

const initialData: ITodo[] =  data ;

const items = createReducer(initialData, (builder) =>
    builder 
        .addCase(addTodo, (state, { payload }: PayloadAction<ITodo>) => [payload, ...state])
        .addCase(deleteTodo, (state, { payload }: PayloadAction<string>) => state.filter(({ id }) => id !== payload))
        .addCase(deleteAllTodo, ((state) => []))
        .addCase(archiveTodo, ((state, { payload }:PayloadAction<string>) =>
            state.map(todo =>
                todo.id === payload ? { ...todo, status: 'archived' } : todo,
            )))
        .addCase(unpackTodo, (state, { payload }:PayloadAction<string>) =>
            state.map(todo =>
                todo.id === payload ? { ...todo, status: 'active' } : todo,
            ))
        .addCase(editTodo, (state, { payload }) =>
            state.map(todo => todo.id === payload.id ?
                {
                    ...todo,
                    name:
                    payload.name,
                    category: payload.category,
                    content: payload.content,
                    dates: payload.dates,
                }
                : todo
    ))
)

interface IEditState {
    data?: ITodo;
    isEdited: boolean; 
}
const initialState:IEditState = { isEdited: false };

const editItem = createReducer(initialState, (builder) => 
    builder
        .addCase(addEditItem, (state, { payload }:PayloadAction<IEditState>) => payload)
        .addCase(deleteEditItem,  ((state) => initialState))        
    )

export default combineReducers({
    items,
    editItem
});

