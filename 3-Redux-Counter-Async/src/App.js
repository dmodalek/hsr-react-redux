import React, { Component } from 'react';
import Counter from './Counter';

function isLoading(status) {
  return {
    type: 'IS_LOADING',
    status
  }
}

function increment() {
  return {
    type: 'INCREMENT'
  }
}

function incrementAsync() {
  return (dispatch, getState) => {
    setTimeout(() => {
      // TODO
      console.log('do something')
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
          onIncrement={() => store.dispatch(increment())}
          onDecrement={() => store.dispatch(decrement())}
        />
      </div>
    );
  }
}

export default App;
