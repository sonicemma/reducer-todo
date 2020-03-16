import React, {useReducer} from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";
import Todo from './components/Todo';
import {todoReducer, initialState} from "./reducer/todoReducer";
import './components/Todo.css';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = item => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: item});
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList toggleCompleted={toggleCompleted} state={state}/>
      <button className="clear-btn" onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>
                Erase completed
            </button>
    </div>
  )

}

export default App;