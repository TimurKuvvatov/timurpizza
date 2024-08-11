import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: 'популярности (DESC)',
    sort: 'rating',
  },
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortType: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { setSortType } = sortSlice.actions;
export default sortSlice.reducer;
