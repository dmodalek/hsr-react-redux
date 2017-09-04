import React, { Component } from 'react';
import MovieList from './MovieList'
import PropTypes from 'prop-types'

class HomepageView extends Component {

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    doLoadMovies: PropTypes.func.isRequired
  }

  componentDidMount () {
    // TODO: Load movies
  }

  render() {
    return (
      <div className="container">
          <h2>Movies</h2>
          {this.props.isLoading
              ? 'Loading...'
                  :  <MovieList movies={this.props.movies} />
        }
      </div>
    );
  }
}

export default HomepageView;
