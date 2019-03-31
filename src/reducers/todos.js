import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { RECEIVE_DATA } from '../actions/shared';

// REDUCER function - functions that take an state and an action and and reduce that to a brand new state
// A reducer must be a pure function
export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO :
            return state.concat([action.todo]);
        case REMOVE_TODO :
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO :
            // mapped over the entire state, and if todo.id matched action.id,
            // used Object.assign() to return a new object with merged properties:
            return state.map((todo) => todo.id !== action.id ? todo :
            Object.assign({}, todo, { complete: !todo.complete }));
        case RECEIVE_DATA :
            return action.todos;
        default :
            return state;
    }
}