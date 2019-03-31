import React from 'react'; // this import is required because we are using JSX
import { connect } from 'react-redux';
import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';

class Todos extends React.Component {
    addItem = e => {
        e.preventDefault();
        // as second parameter, passing a callback to empty the input value
        this.props.dispatch(handleAddTodo(this.input.value, () => this.input.value = ''));
    }
    removeItem = todo => {
        this.props.dispatch(handleDeleteTodo(todo));
    }
    toggleItem = id => {
        this.props.dispatch(handleToggleTodo(id));
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {// Refs provide a way to access DOM nodes or React elements created in the render method.
                 // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
                }
                <input type='text' placeholder='Add todo' ref={ (input) => this.input = input } />
                <button onClick={this.addItem}>Add Todo</button>
                <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

// instead of creating a connected todo, we can simply export the connect function as the default

// connect() connects a React component to the Redux store.
// const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent)

// The mapStateToProps() function allows us to specify which state from the store you want passed to your React
// component
// mapDispatchToProps() function allows us to bind dispatch to action creators before they
// ever hit the component.

// * Presentational Component > Concerned about how thing look. A presentational component should not access
// the store. It should receive any information it needs as props and then just render a UI.
// * Container/Connected Component > Connected to the store, concerned about how things work
// The connected componend gets the data you need from the store, and pass it as props to the
// presentational component

// In the first invocation, we pass the data that we need, and it will return a function that requires
// a component as its parameter
// In the second we pass the component that should be rendered, this parameter will take a regular (presentational)
// React component and return a new, "connected" component.
export default connect(
    state => ({
        todos: state.todos,
    })
)(Todos);