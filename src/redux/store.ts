import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MovieListSliceReducer } from "./movieSlice";
import taskReducer from './taskSlice';

const rootReducer = combineReducers({
  tasks: taskReducer,
  movieList: MovieListSliceReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});