import React from 'react';

const Todo = props => {

    return (
        <div className={props.item.completed ? ' done' : ''}>
            <p onClick={() => {
                props.dispatch({ type: 'MARK_COMPLETE', payload: props.item.id });
                // console.log(props.item.id)
            }}>{props.item.item}</p>
        </div>
    )
}

export default Todo;