//with Redux Toolkit
import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import { toggleModal } from './modal-action';

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload,
// })
const initialState = false;
const isOpen = createReducer(initialState, {
    [toggleModal]: (state) => [!state]
})

export default combineReducers({
    isOpen
});


// const items = createReducer(data, {
//     [addTodo]: (state, { payload }) => [payload, ...state],
//     [deleteTodo]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
//     [archiveTodo]: (state, { payload }) =>
//         state.map(todo =>
//             todo.id === payload ? { ...todo, status: 'archived' } : todo,
//         ),
//     [editTodo]: (state, { payload }) =>
//         state.map(todo =>
//             todo.id === payload.id ? payload : todo,
//         )
// });

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload, 
// })