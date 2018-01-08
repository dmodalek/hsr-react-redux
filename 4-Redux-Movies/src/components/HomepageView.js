import React, { Component } from "react";
import MovieList from "./MovieList";
import MovieListImax from "./../container/MovieListImax";
import MovieListSelection from "./../container/MovieListSelection";
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

  state = {
    error: false
  };

  componentDidMount() {
    this.props
      .doLoadMovies()
      .then(() => {
        this.props.doLoadMovieDetails();
      })
      .catch(() => {
        // whoops!
        console.log("Could not load data...");
        this.setState({ error: true });
      });
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
          <MovieList
            movies={this.props.movies}
            doAddToSelection={this.props.doAddToSelection}
          />
        )}

        <h2>Movies 3D</h2>
        {this.props.isLoading ? (
          "Loading..."
        ) : (
          <MovieList
            movies={this.props.movies3D}
            doAddToSelection={this.props.doAddToSelection}
          />
        )}

        <h2>Movies IMAX</h2>
        {this.props.isLoading ? (
          "Loading..."
        ) : (
          <MovieListImax doAddToSelection={this.props.doAddToSelection} />
        )}

        <h2>Movies Selection</h2>
        <MovieListSelection />
      </div>
    );
  }
}

export default HomepageView;
