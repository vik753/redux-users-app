import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import './App.css';

import {getTodos} from "./store/todoActions";

function App() {
  const dispatch = useDispatch();
  const todosState = useSelector(state => state.todosReducer)

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const todosList = todosState.todos.map(todo => (
    <li key={todo.id}>{todo.title} <span>Status: {todo.completed ? 'COMPLETED' : 'IN PROCESS'}</span></li>));

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todosState.todos.length ? todosList
          : todosState.error ? `Get todos Error: ${todosState.error.errorMessage}` : 'No todos'}
      </ul>
    </div>
  );
}

export default App;
