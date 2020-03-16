import React from 'react';

const Todo = props => {
    console.log(props.item.completed);
    return (
        <div
            onClick={() => props.toggleCompleted(props.item.id)}
            className={`item${props.item.completed ? ' completed' : ''}`}
        >
            <p>{props.item.item}</p>
        </div>
    );
};

export default Todo;