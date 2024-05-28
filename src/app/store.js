import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import todoProductReducer from '../features/addProduct/addProductSlice';
export const store = configureStore({
    reducer: todoReducer,
    todoProduct: todoProductReducer
})