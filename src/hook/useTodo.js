import { todoReducer } from "../todoreducer"
import { useEffect, useReducer } from 'react'

export const useTodo = () => {
  const initialState = []

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }


  //CAMBIO DE ESTADOS en la lsita de tareas
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.done).length

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleDeleteTodo = (id) => {
    const action = {
      type: 'Delete todo',
      payload: id
    }
    dispatch(action)
  };

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add todo',
      payload: todo
    }
    dispatch(action)
  };

  const handleCompleteTodo = (id) => {
    const action = {
      type: 'Complete todo',
      payload: id
    }
    dispatch(action)
  };

  const handleUpdateTodo = (id, description) => {
    const action = {
      type: 'Update todo',
      payload: {
        id,
        description
      }
    }
    dispatch(action)
  };


  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  }
}

