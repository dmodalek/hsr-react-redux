# 3. Redux Counter Async

## Run

```sh
npm install && npm start
```

## Todo

1. Implement an **incrementAsync** Action Creator using `setTimeout()` and use it for the counter.

2. Show a **Loading...** Text while `incrementAsync()` is working

> Note: you can dispatch multiple times, even inside another dispatch call

## Bonus

1. Increment by **+2** if current state `% 2 === 0`

> Note: use `getState()` inside the Action Creator to accomplish this task
