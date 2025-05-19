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
  cartIsVisible: boolean;
  cart: MenuItem[];
  idPedido: number | null;
}

const initialState: RestaurantState = {
  restaurant: undefined,
  modal: undefined,
  modalIsVisible: false,
  cartIsVisible: false,
  cart: [],
  idPedido: null
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
    },
    addCart: (state, action: PayloadAction<number | undefined>) => {
      const item = state.restaurant?.cardapio.find(
        i => i.id === action.payload
      );
      const itemExists = state.cart.some(i => i.id === action.payload);

      if (!itemExists && item) {
        state.cart.push(item);
      } else {
        alert('O item já existe!');
      }
    },
    cartClose: state => {
      state.cartIsVisible = false;
      document.documentElement.style.overflow = '';
    },
    cartOpen: state => {
      state.cartIsVisible = true;
      document.documentElement.style.overflow = 'hidden';
      window.scroll(0, 0);
    },
    deleteItemCart(state, action: PayloadAction<number | undefined>) {
      if (typeof action.payload === 'number') {
        state.cart = state.cart.filter(c => c.id !== action.payload);
      }
    },
    resetCart(state) {
      state.cart = [];
    },
    setPedidoID(state, action: PayloadAction<number | null>) {
      state.idPedido = action.payload;
    }
  }
});

export const {
  addRestaurant,
  setModal,
  modalClose,
  modalOpen,
  addCart,
  cartClose,
  cartOpen,
  deleteItemCart,
  resetCart,
  setPedidoID
} = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
