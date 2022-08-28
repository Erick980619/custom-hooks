

export const TodoReducer = (initialState = [], action) => {
    
    switch (action.type) {
        case '[TODO] Add Todo':
            //retornar un state (valor), puede ser un arreglo, ojeto, voleano, string
            return [
                ...initialState,action.payload
            ];
            case '[TODO] Remove Todo':
                return initialState.filter(todos => todos.id !== action.payload);
            case '[TODO] Toggle Todo':
                    return initialState.map(todo => {

                        if (todo.id === action.payload){
                            return {
                                ...todo,
                                done: !todo.done
                            }
                        }
                        return todo;
                    });
        default:
            return initialState;
    }
}