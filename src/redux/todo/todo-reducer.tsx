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


// interface IAction {
//     type: string;
//     payload?: any;
// }

// const increment = createAction<number, 'increment'>('increment')
// const decrement = createAction<number, 'decrement'>('decrement')
// createReducer(0, (builder) =>
//   builder
//     .addCase(increment, (state, action) => {
//       // action is inferred correctly here
//     })
//     .addCase(decrement, (state, action: PayloadAction<string>) => {
//       // this would error out
//     })
// )

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
    //     .addCase(editTodo, ((state:ITodo[], { payload }:PayloadAction<ITodo>) =>
    //         state.map(todo =>
    //             todo.id === payload.id ?
    //                 {
    //                     ...todo,
    //                     name: payload.name,
    //                     category: payload.category,
    //                     content: payload.content,
    //                     dates: payload.dates,
    //                 }
    //                 : todo,
    //         )
    //     )
    // )
)




//     [editTodo]: (state:ITodo[], { payload }:PayloadAction<ITodo>) =>
//         state.map(todo =>
//             todo.id === payload.id ?
//                 {
//                     ...todo,
//                     name: payload.name,
//                     category: payload.category,
//                     content: payload.content,
//                     dates: payload.dates,
//                 }
//                 : todo,
//         )
// });


// const initialState = {isEdited:false};
// const editItem = createReducer(initialState, {
//     [addEditItem]: (state, { payload }) => payload,
//     [deleteEditItem]: (state, { _ }) => initialState,
// });

export default combineReducers({
    items,
    //editItem
});

// const items = createReducer(initialData, {
//     [addTodo]: (state:ITodo[], { payload }:PayloadAction<ITodo>) => [payload, ...state],
//     [deleteTodo]: (state:ITodo[], { payload }:PayloadAction<string>) =>
//         state.filter(({ id }) => id !== payload),
//     [deleteAllTodo]: (state:ITodo[]) => [],
//     [archiveTodo]: (state:ITodo[], { payload }:PayloadAction<string>) =>
//         state.map(todo =>
//             todo.id === payload ? { ...todo, status: 'archived' } : todo,
//         ),
//     [unpackTodo]: (state:ITodo[], { payload }:PayloadAction<string>) =>
//         state.map(todo =>
//             todo.id === payload ? { ...todo, status: 'active' } : todo,
//         ),
//     [editTodo]: (state:ITodo[], { payload }:PayloadAction<ITodo>) =>
//         state.map(todo =>
//             todo.id === payload.id ?
//                 {
//                     ...todo,
//                     name: payload.name,
//                     category: payload.category,
//                     content: payload.content,
//                     dates: payload.dates,
//                 }
//                 : todo,
//         )
// });


// const initialState = {isEdited:false};
// const editItem = createReducer(initialState, {
//     [addEditItem]: (state, { payload }) => payload,
//     [deleteEditItem]: (state, { _ }) => initialState,
// });

// export default combineReducers({
//     items,
//     editItem
// });
