import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({...action.payload, done:false,})
        },
        removeTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const exists = state.todos.find((todo) => todo.id === action.payload)
            if(!exists) return;
            exists.done = !exists.done;
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;