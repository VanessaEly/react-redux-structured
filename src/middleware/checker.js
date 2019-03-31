import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

// middleware - > a third-party extension point between dispatching an action, and the moment it reaches the reducer
// With Redux's middleware feature, we can run code between the call to store.dispatch() and reducer()
// Redux middleware leverages a concept called higher-order functions. A higher-order function is a function that either:
// * accepts a function as an argument
// * returns a function
const checker = store => next => action => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert("Nope! That's a bad idea");
    }
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert("Nope! That's a bad idea");
    }
    // next is the next middleware in line (if there's one) or actually calling the dispatcher
    return next(action);
}

export default checker;