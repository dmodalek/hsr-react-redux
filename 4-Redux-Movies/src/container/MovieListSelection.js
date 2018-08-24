import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getMoviesSelection } from '../redux/movies';
import MovieList from './../components/MovieList';

const mapStateToProps = state => ({
  movies: getMoviesSelection(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
