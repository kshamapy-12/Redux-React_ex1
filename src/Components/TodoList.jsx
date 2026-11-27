import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todoSlice';

const TodoList = () => {

    const filter = useSelector((state) => state.filter.filter)
    const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch();
    const visible = todos.filter((t) => {
     return filter === 'Completed' ? 
      t.done : 
      filter === 'Pending' ? 
      !t.done :
      true
    });
  return (
    <div className='flex flex-col gap-5'>
{
  visible.map((todo) => {
    return (
<div key={todo.id} className='flex justify-between items-center gap-5 bg-indigo-200 px-4 py-5 rounded-lg'>
    <div className='flex flex-1 gap-5'>
        <h2 className='text-lg font-semibold'>{todo.id}</h2>
      <h2 className='text-lg font-semibold'>{todo.task}</h2>
    </div>
      <button 
      onClick={() => dispatch(toggleTodo(todo.id))}
      className='bg-green-600 text-white px-3 py-2 w-50 rounded-lg active:scale-95 hover:bg-green-500 transition text-lg'>Done</button>
      <button 
      onClick={() => dispatch(removeTodo(todo.id))}
      className='bg-red-600 text-white px-3 py-2 w-50 rounded-lg active:scale-95 hover:bg-red-500 transition text-lg'>Delete</button>

      </div>
    )
  })
}

      
    </div>
  )
}

export default TodoList
