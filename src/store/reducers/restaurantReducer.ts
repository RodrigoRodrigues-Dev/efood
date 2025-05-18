import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MenuItem } from '../../services/api';

interface Restaurant {
  name: string;
  tags: string;
  rating: number;
  description: string;
  img: string;
  cardapio: MenuItem[];
}

interface RestaurantState {
  restaurant: Restaurant | undefined;
  modal: MenuItem | undefined;
  modalIsVisible: boolean;
}

const initialState: RestaurantState = {
  restaurant: undefined,
  modal: undefined,
  modalIsVisible: false
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
    setModal: (state, action: PayloadAction<number>) => {
      const item = state.restaurant?.cardapio.find(
        i => i.id === action.payload
      );

      if (state.restaurant) {
        state.modal = item;
      }
    },
    modalClose: state => {
      state.modalIsVisible = false;
      document.documentElement.style.overflow = '';
    },
    modalOpen: state => {
      state.modalIsVisible = true;
      document.documentElement.style.overflow = 'hidden';
      window.scroll(0, 0);
    }
  }
});

export const { addRestaurant, setModal, modalClose, modalOpen } =
  restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
