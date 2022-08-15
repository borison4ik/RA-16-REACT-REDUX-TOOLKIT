import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/countSlice';
import filesReducer from './reducers/filesSlice';

export const store = configureStore({
  reducer: {
    countReducer,
    filesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
