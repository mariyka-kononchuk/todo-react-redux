import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from './todo/todo-reducer';
import modalReducer from './modal/modal-reducer';

//for watching prevState, action, nextState in console
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger]

//localStorage
const persistConfig = {
    key: 'todos',
    storage
}

const rootReducer = combineReducers({
    todos: todoReducer,
    modal: modalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer, 
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
//обертка над store, которая реализует обновление LocalStorage
const persistor = persistStore(store);

export default { store, persistor };

