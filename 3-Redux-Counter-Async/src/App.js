import React, { Component } from 'react';
import Counter from './Counter';

function isLoading(status) {
  return {
    type: 'IS_LOADING',
    status
  }
}

function increment(count) {
  return {
    type: 'INCREMENT',
    count
  }
}

function incrementAsync() {
  return (dispatch, getState) => {
    dispatch(isLoading(true))
    setTimeout(() => {
      if (getState().count % 2 === 0) {
        dispatch(increment(2))
      } else {
        dispatch(increment(1))
      }
      dispatch(isLoading(false))
    }, 1000);
  };
}

function decrement() {
  return {
    type: 'DECREMENT',
    count: 1
  }
}

class App extends Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.render()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <p>Is Loading: { store.getState().isLoading ? 'Yep' : 'Nope' }</p>
        <Counter
          value={store.getState().count}
          onIncrement={() => store.dispatch(incrementAsync())}
          onDecrement={() => store.dispatch(decrement())}
        />
      </div>
    );
  }
}

export default App;
