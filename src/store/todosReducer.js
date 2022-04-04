import {actionTypes} from "./todoActions";

const noError = {
  isError: false,
  errorMessage: ''
};

const initialState = {
  todos: [],
  error: noError
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return {
        todos: action.payload,
        error: noError
      };
    case actionTypes.TOOK_ERROR:
      return {
        ...state,
        error: {
          isError: true,
          errorMessage: action.payload
        }
      }
    default:
      return state;
  }
}
