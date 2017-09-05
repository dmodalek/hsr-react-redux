import React, { Component } from "react";
import PropTypes from "prop-types";

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    doAddToSelection: PropTypes.func
  };

  static defaultProps = {
    doAddToSelection: () => {}
  };

  handleClick = id => {
    this.props.doAddToSelection(id);
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
                  <a
                    onClick={() => {
                      this.handleClick(movie.id);
                    }}
                    href=""
                  >
                    {movie.title}
                  </a>
                </p>
                <small>{movie.details.synopsis_de}</small>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default MovieList;
