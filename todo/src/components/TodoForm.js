import React, { useState } from 'react';



const TodoForm = (props) => {

    const [newTodoText, setNewTodoText] = useState('');

    const handleChanges = e => {
        // props.dispatch({ type: 'UPDATE_TODO_TEXT' });
        setNewTodoText(e.target.value);
        // console.log(newTodoText)
    }

    return (
        <div>
            <div>
                <h3>Add new todo</h3>
                <input
                    type="text"
                    name="todoText"
                    onChange={handleChanges}
                    value={newTodoText}
                />
                <button
                    onClick={() => {
                        props.dispatch({ type: 'ADD_TODO', payload: newTodoText });
                    }}
                >
                    Create new todo</button>

            </div>
            <div>
                <h3>Clear complete</h3>
                <button
                    onClick={() => {
                        props.dispatch({ type: 'CLEAR_COMPLETE' });
                    }}
                >
                    Clear complete</button>
            </div>
        </div>
    )
}

export default TodoForm;