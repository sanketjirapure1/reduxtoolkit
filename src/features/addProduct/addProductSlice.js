import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todosProduct: [
        {id: 1, ProductName: "GasMeter",Price:"ttttt"}
    ]
}



export const addProductSlice = createSlice({
    name: 'todoProduct',
    initialState,
    reducers: {
        addTodoProduct: (state, action) => {
            const todoProduct = {
                id: nanoid(), 
                ProductName: action.payload,
                Price: action.payload,

            }
            state.todosProduct.push(todoProduct)
        },
        removeTodoProduct: (state, action) => {
            state.todosProduct = state.todosProduct.filter((todoProduct) => todoProduct.id !== action.payload )
        },
    }
})

export const {addTodoProduct, removeTodoProduct} = addProductSlice.actions

export default addProductSlice.reducer