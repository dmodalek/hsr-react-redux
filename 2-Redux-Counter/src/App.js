import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.render();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT', count: 1 })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT', count: 1 })}
        />
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT', count: 2 })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT', count: 2 })}
        />
      </div>
    );
  }
}

export default App;
