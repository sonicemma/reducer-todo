import React, {useState} from 'react';

const TodoForm = props => {

    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(newTodo)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='item' type='text' value={newTodo} onChange={handleChanges} />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm;