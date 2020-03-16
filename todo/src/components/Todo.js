import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from '../reducer/todoReducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    return (
        <h1>From inside Todo</h1>
    )

};

export default Todo;