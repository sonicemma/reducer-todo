import React, {useState} from 'react';

const TodoForm = props => {
    console.log('from inside todoform', props);

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
            <input name='new-todo' type='text' value={newTodo} onChange={handleChanges} />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm;