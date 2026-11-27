import React from 'react'
import FilterBtns from './Components/FilterBtns'
import TodoList from './Components/TodoList'
import TodoInput from './Components/TodoInput'

const App = () => {
  return (
    <div className='w-[90%] mx-auto mt-5'>
      <TodoInput />
      <FilterBtns/>
      <TodoList />
    </div>
  )
}

export default App
