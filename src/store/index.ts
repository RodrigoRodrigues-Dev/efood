import { configureStore } from '@reduxjs/toolkit';
import { restaurantReducer } from './reducers/restaurantReducer';

import api from '../services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    restaurantState: restaurantReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
