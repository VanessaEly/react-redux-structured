import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers'; // default is getting the index.js file inside of this folder
import middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Create Store > first parameter = reducer(s), second parameter = middlewares (optional)
// Redux allows us to combine both reducers into one object
// Middleware is called in the order in which they were provided to applyMiddleware().
const store = createStore(reducer, middleware);

// Provider makes it possible for Redux to pass data from the store to any React components that need it.
// It uses React’s context feature to make this work.
ReactDOM.render(
    // Instead of directly rendering App, we wrap it inside our provider, passing our store as its prop
			// Because we wrapped our entire app inside of the provider, now we are able to consume it inside any
			// component
            // Provider is a react component that we use to wrap the entire application
            // This is implemented by react-redux, but to see details, it's implemented in custom_context index
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
