import React from 'react';

const Todo = props => {
    return (
        <div>

            <p>{props.item.item}</p>
            <p>{props.item.completed}</p>
            <p>{props.item.id}</p>
        </div>
    )
}

export default Todo;
