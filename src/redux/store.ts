import { MovieListSliceReducer } from "./reducers/movieSlice";
import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import taskReducer from './reducers/taskSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MovieSearchListReducer } from "./reducers/movieSearchSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  tasks: taskReducer,
  movieList: MovieListSliceReducer,
  movieSearch: MovieSearchListReducer,
});

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middlewares)