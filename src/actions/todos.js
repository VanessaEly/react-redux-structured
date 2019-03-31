import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo,
    }
}

const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id,
    }
}

const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export const handleAddTodo = (name, callback) =>{
    return dispatch => {
        // name is filled with the add todo input content, due to its 'ref' property
        return API.saveTodo(name).then((todo) => {
            dispatch(addTodo(todo));
            callback();
        }).catch(() => {
            alert('There was an error, try again.');
        });   
    }
}

export const handleDeleteTodo = todo => {
    return dispatch => {
        dispatch(removeTodo(todo.id));
        return API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodo(todo));
            alert("An error occured, try again!");
        });
    };
};

export const handleToggleTodo = id => {
    return dispatch => {
        dispatch(toggleTodo(id));
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleTodo(id));
            alert("An error occured, try again!");
        });
    };
}