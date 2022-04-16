import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";

export const addTodo = createAction('app/addTodo', ({name,category, content, dates}) => ({
    payload: {
        id: uuidv4(),
        date: dateFormat(new Date(), "mmmm d, yyyy"),
        name,
        category,
        content,
        dates,
        status:'active'
    }   
}))

export const deleteTodo = createAction('app/deleteTodo');
export const deleteAllTodo = createAction('app/deleteAllTodo');
export const archiveTodo = createAction('app/archiveTodo');
export const unpackTodo = createAction('app/unpackTodo');
export const editTodo = createAction('app/editTodo');
export const addEditItem = createAction('app/addEditItem',
(data) => ({
    payload: {
        data,
        isEdit:true
    }   
    }));
export const deleteEditItem = createAction('app/deleteEditItem');





