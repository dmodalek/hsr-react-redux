import React, { Component } from 'react';
import Counter from './Counter';
import Likes from './Likes';

class App extends Component {

  state = {
    count: 0
  }

  handleCounterIncrement = (step) => {
    this.setState({ count: this.state.count + step})
  }

  render() {
    return (
      <div className="App">
        <Counter value={this.state.count} step={2} handleClick={this.handleCounterIncrement} />
        <Likes value={this.state.count} />
      </div>
    );
  }
}

export default App;
