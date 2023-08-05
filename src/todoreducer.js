export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'Add todo':
      return [...initialState, action.payload]
    case 'Delete todo':
      return initialState.filter((el)=> el.id !== action.payload)
    case 'Complete todo':
      return initialState.map((el)=>{
        if(el.id === action.payload){
          return{
            ...el,
            done: !el.done,
          };
        }
        return el
      })
    case 'Update todo':
      return initialState.map((el)=>{
        if(el.id === action.payload.id){
          return{
            ...el,
            description: action.payload.description
          }
        }
        return el
      })
    default:
      return initialState;
  }
}