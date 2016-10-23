import React, { Component } from 'react';
import MovieList from './MovieList'

class HomepageView extends Component {

  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    movies: React.PropTypes.array.isRequired,
    doLoadMovies: React.PropTypes.func.isRequired
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
