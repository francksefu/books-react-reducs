import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
      all: state.all.filter((book) => book.item_id !== action.payload),
    }),
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
