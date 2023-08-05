/* eslint-disable react/prop-types */
import { useForm } from "../hook/useForm"

export const TodoAdd = ({handleNewTodo}) => {
  
  const {description, onInputChange, onResetForm} = useForm({
    description:'',
  });


  const onSubmit = (e)=>{
    e.preventDefault();
    if(description.length <= 1) return

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleNewTodo(newTodo);

    onResetForm();
  }

  return (
    <form className="flex justify-center" onSubmit={onSubmit}>
      <input 
        type="text"
        name="description"
        className="input-add px-3 py-1 bg-gray-100 shadow-md rounded-lg my-2 w-full"
        value={description}
        onChange={onInputChange}
        placeholder="Ingrese una tarea"  
      />
      <button 
        className="btn-add bg-orange-500 hover:bg-orange-700 text-white font-semibold text-sm py-2 px-2 rounded-lg m-2 shadow-md transition duration-500 ease"
        type="submit"
      >
        Agregar
      </button>
    </form>
  )
}
