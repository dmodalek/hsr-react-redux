# 4. Redux Movies

## Run

```sh
npm install -g json-server
npm run server
npm install && npm start
```

## Part I - Redux Advanced

### Todo

1. Load movies and show them in a `<MovieList />` Component

2. Add a selector `getMovies3D` to get only movies that have the `_3d` Attribute. Use this selector in the `HomepageView` container and display those 3D Movies in the `HomepageView` component below the existing movie list.

> Note: you can use `Array.prototype.filter()` and `Array.prototype.includes()` for this

### Bonus

1. Add a selector `getMoviesIMAX` to get only movies that have the `imax` attribute. Use this selector in a new container called `MovieListImax`. Add this container to the `HomepageView` component to display those IMAX movies as well.

2. What is the benefit of getting data for a component via a selector in a separate container compared to getting all the data in the `HomepageView` container? 


## Part II - Async Flow

### Todo

1. Load movies details when movies have finished loading. Use the existing `doLoadMovieDetails` action creator for this task.

2. Show movie details (i.e. `synopsis_de`) below the movie titles

### Bonus

1. Show an error message when the data could not be loaded

> Note: To simulate this, just don't start the api server


## Part III - Data Handling

1. When clicking on a movie title, add its movie id to a Redux state called `selection: {}`

> Note: To see if it worked, use the Redux Dev Tools and inspect the state 

2. Show all the selected movies in a movie list component using a container `MovieListSelection`

### Bonus

1. Filter out the selected movies from the other lists
