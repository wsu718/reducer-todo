import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {


    return (
        <div>
            <h3>List of todos</h3>
            {props.todoState.map(item => (
                <Todo item={item} key={item.id} dispatch={props.dispatch} />
            ))}

        </div>
    )
}

export default TodoList;