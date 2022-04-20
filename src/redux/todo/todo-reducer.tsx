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
        .addCase(addTodo, (state: ITodo[], { payload }: PayloadAction<ITodo>) => [payload, ...state])
        .addCase(deleteTodo, (state: ITodo[], { payload }: PayloadAction<string>) => state.filter(({ id }) => id !== payload))
        .addCase(deleteAllTodo, ((state: ITodo[]) => []))
        .addCase(archiveTodo, ((state:ITodo[], { payload }:PayloadAction<string>) =>
            state.map(todo =>
                todo.id === payload ? { ...todo, status: 'archived' } : todo,
            )))
        .addCase(unpackTodo, (state:ITodo[], { payload }:PayloadAction<string>) =>
            state.map(todo =>
                todo.id === payload ? { ...todo, status: 'active' } : todo,
            ))
        .addCase(editTodo, (state:ITodo[], { payload }) =>
            state.map(todo => todo.id === payload.id ?{...todo,name: payload.name,category: payload.category,content: payload.content,dates: payload.dates,}: todo
    ))
)

interface IEditState {
    data?: ITodo;
    isEdited: boolean; 
}
const initialState:IEditState = { isEdited: false };

interface IEdit {
    data?: ITodo;
    isEdited: boolean;
}

const editItem = createReducer(initialState, (builder) => 
    builder
        .addCase(addEditItem, (state: IEditState, { payload }:PayloadAction<IEdit>) => payload)
        .addCase(deleteEditItem,  ((state) => initialState))        
    )

export default combineReducers({
    items,
    editItem
});

