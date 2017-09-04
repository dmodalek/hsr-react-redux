import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    step: PropTypes.number
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
