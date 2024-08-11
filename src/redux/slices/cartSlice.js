import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const findIndexItem = (item, itemData) => {
  return item.id === itemData.id && item.type === itemData.type && item.size === itemData.size;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemData = action.payload;
      const findItem = state.items.find((item) => findIndexItem(item, itemData));
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...itemData,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    removeItem: (state, action) => {
      const itemData = action.payload;
      const findItem = state.items.find((item) => findIndexItem(item, itemData));
      if (findItem) {
        findItem.count--;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((item) => !findIndexItem(item, itemData));
      }
      state.totalPrice -= findItem.price;
    },
    removeAllItems: (state, action) => {
      const itemData = action.payload;
      const findItem = state.items.find((item) => findIndexItem(item, itemData));
      state.totalPrice -= findItem.price * findItem.count;
      state.items = state.items.filter((item) => findIndexItem(item, itemData));
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
