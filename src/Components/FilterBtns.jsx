import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../features/filterSlice';

const FilterBtns = () => {
const dispatch = useDispatch();


  return (
    <div className='flex justify-around items-center m-5 border-b border-gray-300 py-8'>
     <button 
     onClick={() => dispatch(setFilter('All'))}
     className='bg-gray-500 text-xl text-white px-6 py-2 w-50 rounded-lg active:scale-95'>All</button>
     <button 
     onClick={() => dispatch(setFilter('Pending'))}
     className='bg-gray-500 text-xl text-white px-6 py-2 w-50 rounded-lg active:scale-95'>Pending</button>
     <button 
     onClick={() => dispatch(setFilter('Completed'))}
     className='bg-gray-500 text-xl text-white px-6 py-2 w-50 rounded-lg active:scale-95'>Completed</button>
    </div>
  )
}

export default FilterBtns
