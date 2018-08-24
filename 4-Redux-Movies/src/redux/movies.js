import fetch from '../helper/fetch';

// ------------------------------------
// Selectors
// ------------------------------------

export const getIsLoading = state => {
  return state.movies.isLoading;
};

export const getMovieIDs = state => {
  return state.movies.movieIDs;
};

export const getMovies = state => {
  return state.movies.movieIDs.map(movieID => {
    return { ...state.movies.movies[movieID], details: { ...state.movies.details[movieID] } };
  });
};

export const getMoviesWithoutSelection = state => {
  // TODO
};

export const getMovies3D = state => {
  // TODO
};

export const getMoviesImax = state => {
  // TODO
};

export const getMoviesSelection = state => {
  // TODO
};

// ------------------------------------
// Action Types
// ------------------------------------

const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING';
const MOVIES_RECEIVE_MOVIES = 'MOVIES_RECEIVE_MOVIES';
const MOVIES_RECEIVE_MOVIE_DETAILS = 'MOVIES_RECEIVE_MOVIE_DETAILS';
const MOVIES_ADD_TO_SELECTION = 'MOVIES_ADD_TO_SELECTION';

// ------------------------------------
// Action Creators
// ------------------------------------

const isLoading = status => ({
  type: MOVIES_IS_LOADING,
  status
});

const receiveMovies = movies => ({
  type: MOVIES_RECEIVE_MOVIES,
  movies
});

const receiveMovieDetails = details => ({
  type: MOVIES_RECEIVE_MOVIE_DETAILS,
  details
});

const addToSelection = id => ({
  type: MOVIES_ADD_TO_SELECTION,
  id
});

// ------------------------------------
// Async Action Creators
// ------------------------------------

const fetchMovies = () => {
  let requestURL = 'http://localhost:3001/movies';
  return (
    fetch(requestURL)
      // Parse response
      .then(data => {
        return {
          movies: data
        };
      })
  );
};

const doLoadMovies = () => (dispatch, getState) => {
  dispatch(isLoading(true));
  return (
    fetchMovies()
      .then(json => {
        if (json.movies.length !== 0) {
          dispatch(receiveMovies(json.movies));
          return dispatch(isLoading(false));
        }
        throw new Error('Movies not available :-(');
      })
      // Either fetching or parsing failed
      .catch(() => {
        dispatch(isLoading(false));
        throw new Error('Loading Movies failed :-(');
      })
  );
};

// -----------------------------------------------------------------------------

const fetchMovieDetails = ids => {
  let requestURL = `http://localhost:3001/details?${ids.map(id => 'movie_id=' + id).join('&')}`;
  return (
    fetch(requestURL)
      // Parse response
      .then(data => {
        return {
          details: data
        };
      })
  );
};

const doLoadMovieDetails = () => (dispatch, getState) => {
  dispatch(isLoading(true));
  const ids = getMovieIDs(getState());
  return (
    fetchMovieDetails(ids)
      .then(json => {
        if (json.details.length !== 0) {
          dispatch(isLoading(false));
          return dispatch(receiveMovieDetails(json.details));
        }
        throw new Error('Details not available :-(');
      })
      // Either fetching or parsing failed
      .catch(() => {
        dispatch(isLoading(false));
        throw new Error('Loading Details failed :-(');
      })
  );
};

// -----------------------------------------------------------------------------

export const doAddToSelection = movieID => {
  return addToSelection(movieID);
};

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  doLoadMovies,
  doLoadMovieDetails,
  doAddToSelection
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [MOVIES_IS_LOADING]: (state, action) => {
    return { ...state, isLoading: action.status };
  },
  [MOVIES_RECEIVE_MOVIES]: (state, action) => {
    const movies = {};
    action.movies.forEach(m => (movies[m.id] = m));
    return {
      ...state,
      movieIDs: action.movies.map(m => m.id),
      movies
    };
  },
  [MOVIES_RECEIVE_MOVIE_DETAILS]: (state, action) => {
    const details = {};
    action.details.forEach(d => (details[d.movie_id] = d));
    return {
      ...state,
      details
    };
  },
  [MOVIES_ADD_TO_SELECTION]: (state, action) => {
    const selection = [...state.selection, action.id];
    return { ...state, selection: selection };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoading: false,
  movieIDs: [],
  movies: {},
  details: {},
  selection: []
};

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
