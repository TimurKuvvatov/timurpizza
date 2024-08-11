import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filterCategory } = filterSlice.actions;

export default filterSlice.reducer;
