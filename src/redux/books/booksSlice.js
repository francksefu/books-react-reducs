import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => ({
      ...state,
      all: [...state.all, action.payload],
    }),
    remove: (state, action) => ({
      ...state,
      all: state.all.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
