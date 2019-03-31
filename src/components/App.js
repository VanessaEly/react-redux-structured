import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount () {
      const { dispatch } = this.props;
      dispatch(handleInitialData());
      //make code re-render whenever the store changes
      // subscribe(() => this.forceUpdate());
  }
  render() {
      if (this.props.loading) return <h3>Loading</h3>
      return (
          <div>
            <ConnectedTodos />
            <ConnectedGoals />
          </div>
      )
  }
}

export default connect(
  // the first invocation receives this function, which will return an object only with the loading property,
  // because it's the only one we need in our App component
  state => ({
    loading: state.loading,
  })
)(App);
