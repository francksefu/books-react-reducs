import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catList: [], status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const { reducer } = categoriesSlice.actions;
export default categoriesSlice.reducer;
