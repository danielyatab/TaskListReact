/* eslint-disable react/prop-types */
import { FaEdit } from 'react-icons/fa'
import { useForm } from '../hook/useForm'
import { useRef, useState } from 'react';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {

  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description
  })

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    const id = todo.id
    const description = todo.description
    handleUpdateTodo(id, description);
    setDisabled(!disabled);
    focusInputRef.current.focus()
  }

  return (
    <form className='flex justify-between items-center ' onSubmit={onSubmitUpdate}>
      <input
        type="text"
        name="updateDescription"
        className={`
          ${todo.done ? 'line-through' : ''}
        input-update px-3 py-1 bg-gray-600 rounded my-2 outline-none ${disabled?'':'focus:bg-gray-400'} `}
        value={updateDescription}
        onChange={onInputChange}
        placeholder="¿que tarea ?"
        readOnly={disabled}
        ref={focusInputRef}
      />
      <button
        className="btn-edit bg-green-600 text-white font-semibold text-sm py-2 px-2 rounded-lg m-2 shadow-md hover:bg-green-700 transition duration-500 ease"
        type="submit"
      >
        <FaEdit />
      </button>
    </form>
  )
}
