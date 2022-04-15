//with Redux Toolkit
import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
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

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload,
// })
const initialState = {isEdited:false};
const editItem = createReducer(initialState, {
    [addEditItem]: (state, { payload }) => payload,
    [deleteEditItem]: (state, { _ }) => initialState,
});

export default combineReducers({
    items,
    editItem
});


//without Redux Toolkit
// import { combineReducers } from 'redux';
// import data from '../../../src/data/contacts.json';
// import types from './contacts-types'

// const items = (state = data, {type, payload}) => {
//     switch (type) {
//         case types.ADD_CONTACT:
//             return [payload, ...state];
//         case types.DELETE_CONTACT:
//             return state.filter(({id}) => id !== payload)
            
//         default:
//             return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//      switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;  
//         default:
//             return state;
//     }
// }

// export default combineReducers({
//     items,
//     filter
// });