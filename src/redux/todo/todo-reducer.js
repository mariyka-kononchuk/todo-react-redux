//with Redux Toolkit
import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import data from '../../data/todos.json';
import {addTodo, deleteTodo, archiveTodo, editTodo, unpackTodo} from './todo-action'

const items = createReducer(data, {
    [addTodo]: (state, { payload }) => [payload, ...state],
    [deleteTodo]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
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
            todo.id === payload.id ? payload : todo,
        )
});

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload, 
// })

export default combineReducers({
    items,
    // filter
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