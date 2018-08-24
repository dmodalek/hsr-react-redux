import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getIsLoading, getMovies } from '../redux/movies';
import HomepageView from './../components/HomepageView';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  movies: getMovies(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageView);
