export const initialState = 
{
    item: 'Make this app',
    completed: false,
    id: 3892987589
  }


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log('added', state);
            return [...state, {item: action.payload, completed: false, id: Date.now()}];
        };
        case 'TOGGLE_COMPLETE': {
            let completedItem = state.map(items => {
                if (items.id === action.payload.id) {
                    return {
                        ...items,
                        completed: !items.completed
                    }
                } else {
                    return items;
                }
            })
            return completedItem;
        };
        case 'CLEAR_COMPLETED': {
            let newState = [...state];
            let cleared = newState.filter(todo => {
                return todo.completed === false;
            })
            return cleared;
        };
        default:
            return state;
    }
}