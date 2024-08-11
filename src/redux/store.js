import { configureStore } from '@reduxjs/toolkit';

import pageSlice from './slices/pageSlice';
import sortSlice from './slices/sortSlice';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    pageSlice,
    cartSlice,
    pizzaSlice,
  },
});
