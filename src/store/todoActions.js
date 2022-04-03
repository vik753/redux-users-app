
export const actionTypes = {
  GET_TODOS: "GET_TODOS"
}

export const getTodos = () => (dispatch) => {
  return {
    type: actionTypes.GET_TODOS
  }
}