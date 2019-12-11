import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { reducer, initialState } from './reducers/todoReducer';

function App() {

  const [todoState, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <TodoList todoState={todoState} dispatch={dispatch} />
      <TodoForm todoState={todoState} dispatch={dispatch} />
    </div>
  );
}

export default App;
