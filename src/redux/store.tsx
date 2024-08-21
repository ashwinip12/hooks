import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers';

const store = configureStore({
  reducer: blogReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
