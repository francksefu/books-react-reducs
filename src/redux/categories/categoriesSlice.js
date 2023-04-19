import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catList: [], status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const { checking } = categoriesSlice.actions;
export default categoriesSlice.reducer;
