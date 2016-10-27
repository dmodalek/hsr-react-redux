import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions, getIsLoading, getMoviesWithoutSelection, getMovies3D } from '../redux/movies'
import HomepageView from './../components/HomepageView'

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  movies: getMoviesWithoutSelection(state),
  movies3D: getMovies3D(state)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageView)
