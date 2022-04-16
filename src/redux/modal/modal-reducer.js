import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import { toggleModal } from './modal-action';

const initialState = false;
const isOpen = createReducer(initialState, {
    [toggleModal]: (state) => !state
})

export default combineReducers({
    isOpen
});
