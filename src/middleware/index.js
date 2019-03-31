import checker from './checker';
import logger from './logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk, checker, logger); // adding middlewares

// WHAT REDUXTHUNK DOES, this could de our own thunk implementation
// const thunk = store => next => action => {
//     // if we call dispatch using a function (like API promises) istead of an object
//     if (typeof action === 'function') return action(store.dispatch);
//     return next(action);
// }