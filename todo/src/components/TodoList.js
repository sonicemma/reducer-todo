import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.state);
    return (
        <div className="todo-list">
            {props.state.map(item => (
                <>
                <Todo toggleCOompleted={props.toggleCompleted} item={item}/> 
                </>
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Erase completed
            </button>
        </div>
    );
};

export default TodoList;