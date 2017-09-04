import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types'

class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
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
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}

export default App;
