import React, { Component } from 'react';

class Counter extends Component {

  static propTypes = {
    value: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    step: React.PropTypes.number
  }

  static defaultProps = {
    step: 1
  }

  handleClick = () => {
    this.props.handleClick(this.props.step)
  }

  render() {
    return <h1 onClick={this.handleClick} style={{ position: 'absolute', top: 20, left: 50, cursor: 'pointer' }}>Count: {this.props.value}</h1>
  }
}

export default Counter;
