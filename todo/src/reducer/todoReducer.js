export const initialState = [
    {
        item: 'Make this app',
        completed: false,
        id: Date.now()
    }
]


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [...state, {item: action.payload, completed: false, id: Date.now()}];
        };
        case 'TOGGLE_COMPLETE': {
            let completedItem = state.map(items => {
                if (items.id === action.id) {
                    return {
                        ...items,
                        completed: !items.completed,
                        time: undefined
                    }
                } else {
                    return {
                        ...items,
                        completed: !items.completed,
                        time: Date.now
                    };
                }
            })
            return completedItem;
        };
        case 'CLEAR_COMPLETED': {
            return state.filter((items) => items.completed === false)
        };
        default:
            return state;
    }
}