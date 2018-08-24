import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Likes extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  };

  render() {
    return <h1 style={{ position: 'absolute', bottom: 20, right: 50 }}>Likes: {this.props.value}</h1>;
  }
}

export default Likes;
