import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";

// interface IEdit {
//     id: string;
//     name: string;
//     category: string;
//     content: string;
//     dates?: string;
// } 

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

export const deleteTodo = createAction('app/deleteTodo', (id) => ({ payload: id }));
export const deleteAllTodo = createAction('app/deleteAllTodo');
export const archiveTodo = createAction('app/archiveTodo', (id)=>({payload:id}));
export const unpackTodo = createAction('app/unpackTodo', (id)=>({payload:id}));
export const editTodo = createAction('app/editTodo',({id, name,category, content, dates}) => ({
    payload: {
        id,
        name,
        category,
        content,
        dates,
    }   
}));
export const addEditItem = createAction('app/addEditItem',
(data) => ({
    payload: {
        data,
        isEdit:true
    }   
    }));
export const deleteEditItem = createAction('app/deleteEditItem');





