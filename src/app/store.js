import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice';
import filterReducer from '../features/filterSlice';

const loadTodos = () => {
    try{
        const saved = localStorage.getItem('todos');
        return saved ?
        JSON.parse(saved) :
        [];

    } catch{
        return [];
    }
}


const store = configureStore({
    reducer: {
        todos: todoReducer,
        filter: filterReducer,
    },
    preloadedState: {
        todos: {
           todos: loadTodos(),
        }
    },
});

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState().todos.todos))
});

export default store;