import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  all: [],
  isLoading: false,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getbook = createAsyncThunk('books/getbook', async (thunkAPI) => {
  try {
    const response = await axios.get(`${url}/apps/XGpFs782LEwopzLyeLb1/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('sorry, something is wrong');
  }
});

export const sendbook = createAsyncThunk('book/sendbook', async (book) => {
  const response = await axios.post(`${url}/apps/XGpFs782LEwopzLyeLb1/books/`, {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: 'science',
  });

  return response.data;
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  const response = await axios.delete(`${url}/apps/XGpFs782LEwopzLyeLb1/books/${id}`);
  return response.data;
});

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

  extraReducers: (builder) => {
    builder
      .addCase(getbook.fulfilled, (state, action) => ({
        ...state,
        all: Object.entries(action.payload).map(([itemId, [book]]) => ({ itemId, ...book })),
      }))
      .addCase(sendbook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(sendbook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        all: [...state.all, action.payload],
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        all: state.all.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export const { add, remove } = booksSlice.actions;
export default booksSlice.reducer;
