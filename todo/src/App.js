import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/todoReducer';

function App() {

  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoList todoState={todoState} />
    </div>
  );
}

export default App;
