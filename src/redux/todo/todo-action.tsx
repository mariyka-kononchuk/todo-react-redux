import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from "dateformat";
import ITodo from '../../interfaces/todo.interface';

interface IData {
    id?: string;
    name: string;
    category: string;
    content: string;
    dates?: string;
} 

export const addTodo = createAction('app/addTodo', ({name,category, content, dates}:IData) => ({
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

export const deleteTodo = createAction('app/deleteTodo', (id:string) => ({ payload: id }));
export const deleteAllTodo = createAction('app/deleteAllTodo');
export const archiveTodo = createAction('app/archiveTodo', (id:string)=>({payload:id}));
export const unpackTodo = createAction('app/unpackTodo', (id:string)=>({payload:id}));
export const editTodo = createAction('app/editTodo',({id, name, category, content, dates}:IData) => ({
    payload: {
        id,
        name,
        category,
        content,
        dates,
    }   
}));

export const addEditItem = createAction('app/addEditItem',
(data:ITodo) => ({
    payload: {
        data,
        isEdited:true
    }   
    }));
export const deleteEditItem = createAction('app/deleteEditItem');





