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

2. Add a selector `getMovies3D` to get only movies that have the `_3d` Attribute

> Note: you can use `Array.prototype.filter()` and `Array.prototype.includes()` for this

### Bonus

1. Add a selector `getMoviesIMAX` to get only movies that have the `imax` attribute. Use the selector in a new container called `MovieListImax` and use it to display those IMAX movies.

2. What is the benefit of loading data in a container as in 2) compared to loading it all in the HomepageView component?


## Part II - Async Flow

### Todo

1. Load movies details when movies have finished loading

2. Show movie details (i.e. synopsis_de) below the movie titles

### Bonus

1. Show an error message when the data could not be loaded

> Note: To simulate this, just don't start the api server


## Part III - Data Handling

1. When clicking on a movie title, add its movie id to a Redux state called `selection: {}`

2. Show all the selected movies in a movie list component using a container `MovieListSelection`

### Bonus

1. Filter out the selected movies from the other lists
