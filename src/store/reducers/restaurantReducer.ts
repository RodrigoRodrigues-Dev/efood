import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Restaurant {
  name: string;
  tags: string[];
  rating: string;
  description: string;
  img: string;
}

interface RestaurantState {
  restaurant: Restaurant | undefined;
}

const initialState: RestaurantState = {
  restaurant: undefined
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    }
  }
});

export const { addRestaurant } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
