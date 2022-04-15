//with Redux Toolkit
import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import { toggleModal } from './modal-action';

// const filter = createReducer('', {
//    [changeFilter]:(_, {payload}) => payload,
// })
const initialState = false;
const isOpen = createReducer(initialState, {
    [toggleModal]: (state) => !state
})

export default combineReducers({
    isOpen
});
