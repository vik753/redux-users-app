import axios from "axios";

export const actionTypes = {
  GET_TODOS: "GET_TODOS",
  TOOK_ERROR: "TOOK_ERROR"
}

export const getTodos = () => async (dispatch) => {
  let todos = [];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
    todos = response.data.length ? [...response.data] : [];
  } catch (err) {
    return dispatch({
      type: actionTypes.TOOK_ERROR,
      payload: err.message ?? 'Get todos response error.'
    });
  }
  return dispatch ({
    type: actionTypes.GET_TODOS,
    payload: todos
  })
}