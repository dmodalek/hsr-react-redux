import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getMoviesImax } from '../redux/movies';
import MovieList from './../components/MovieList';

const mapStateToProps = state => ({
  movies: getMoviesImax(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
