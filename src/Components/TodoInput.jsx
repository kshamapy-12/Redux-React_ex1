import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice';



const TodoInput = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const handledTodo = () => {
 dispatch(addTodo({id: Date.now(), task: task}));
 setTask('');
  }

  return (
    <div className='flex justify-around gap-5 items-center bg-indigo-100 px-5 py-4'>
      <input 
      value={task} 
      onChange={(e) => setTask(e.target.value)}
      type="text" placeholder='Enter Your todo here...' className='bg-white px-5 py-3 w-full rounded-lg outline-0' />
      <button 
      onClick={handledTodo}
      className='bg-gray-500 text-xl text-white px-6 py-2 w-50 rounded-lg active:scale-95'>Add Todo</button>
    </div>
  )
}

export default TodoInput
