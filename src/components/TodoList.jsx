/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo }) => {
  return (
    <ul className="container-todo overflow-y-auto  w-full">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  )
}
