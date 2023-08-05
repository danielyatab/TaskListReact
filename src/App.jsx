import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { useTodo } from './hook/useTodo'
import './style/App.css'

export const App = () => {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className='card container mx-auto w-11/12 sm:w-96 flex flex-col justify-stretch gap-2 items-center bg-gray-200 rounded-xl p-2'>
        <h1 className='font-bold text-2xl text-gray-600'>Todo List</h1>
        <div className='flex items-center gap-5'>
          <h3 className='font-bold text-gray-600 text-center'>Tareas: {todosCount} </h3>
          <h3 className='font-bold text-gray-600 text-center'>No Terminadas: {pendingTodosCount}</h3>
        </div>

        <div className='flex  flex-col items-center '>
          <h3 className='text-sm font-bold w-1/3 '>Agregar Tarea</h3>
          <TodoAdd 
            handleNewTodo={handleNewTodo}
          />
        </div>
        <TodoList 
          todos={todos}
          handleDeleteTodo ={handleDeleteTodo}
          handleCompleteTodo = {handleCompleteTodo}
          handleUpdateTodo = {handleUpdateTodo}
        />
      </div>
    </>
  )
}
