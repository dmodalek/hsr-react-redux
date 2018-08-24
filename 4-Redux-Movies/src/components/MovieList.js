import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    doAddToSelection: PropTypes.func
  };

  static defaultProps = {
    doAddToSelection: () => {}
  };

  handleClick = id => {
    // TODO: add to selection
  };

  render() {
    return (
      <div className="MovieList">
        {this.props.movies.length === 0 ? (
          <p>No movies available</p>
        ) : (
          this.props.movies.map(movie => {
            return (
              <div key={movie.id}>
                <p>
                  <button
                    onClick={() => {
                      this.handleClick(movie.id);
                    }}
                  >
                    {movie.title}
                  </button>
                </p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default MovieList;
