import { configureStore } from '@reduxjs/toolkit';
import { restaurantReducer } from './reducers/restaurantReducer';

export const store = configureStore({
  reducer: {
    restaurantState: restaurantReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
