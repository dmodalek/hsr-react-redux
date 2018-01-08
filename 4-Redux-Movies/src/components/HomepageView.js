import React, { Component } from "react";
import MovieList from "./MovieList";
import PropTypes from "prop-types";

class HomepageView extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired,
    doLoadMovies: PropTypes.func.isRequired,
    doLoadMovieDetails: PropTypes.func.isRequired,
    doAddToSelection: PropTypes.func.isRequired
  };

  state = {
    error: false
  };

  componentDidMount() {
    // TODO: Load movies
  }

  render() {
    return (
      <div className="container">
        {this.state.error ? (
          <div style={{ color: "crimson" }}>Loading the movies failed! <span role="img" aria-label="Monkey">🙈</span></div>
        ) : (
          ""
        )}
        
        <h2>Movies</h2>
        {this.props.isLoading ? (
          "Loading..."
        ) : (
          <MovieList movies={this.props.movies} />
        )}

        <h2>Movies 3D</h2>
        {this.props.isLoading ? "Loading..." : <MovieList movies={[]} />}
      </div>
    );
  }
}

export default HomepageView;
