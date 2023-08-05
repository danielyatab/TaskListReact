/* eslint-disable react/prop-types */
import { FaTrashCan } from 'react-icons/fa6'
import { TodoUpdate } from './TodoUpdate'

export const TodoItem = ({ 
  todo,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo }) => {
  return (
    <li className='px-1 py-1 my-2 bg-gray-100 rounded-lg shadow-md flex justify-evenly items-center dark:bg-gray-600 dark:text-white w-full'>
      <span 
        className='flex justify-center px-2 overflow-hidden cursor-pointer'
        onClick={()=>handleCompleteTodo(todo.id)}  
      >{
        todo.done?'❌':'⭕'
      }
        <label htmlFor="" name="todo-container"></label>
      </span>
      <TodoUpdate 
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
      ></TodoUpdate>
      <button
        className='px-1 py-1 bg-red-500 rounded-lg text-white hover:bg-red-700 transition-all duration-500 ease'
        onClick={()=>handleDeleteTodo(todo.id)}
      >
        <FaTrashCan />
      </button>
    </li>
  )
}
