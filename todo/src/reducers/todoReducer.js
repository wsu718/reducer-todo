export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'This is done',
    completed: true,
    id: 3892982589
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'MARK_COMPLETE':
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            });
        case 'CLEAR_COMPLETE':
            return state.filter(item => {
                return !item.completed
            })
        default:
            return state;
    }

}