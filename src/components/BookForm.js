import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/booksSlice';
import BookList from './BookList';

function BookForm() {
  const [titleT, setTitle] = useState('');
  const [authorT, setAuthor] = useState('');
  const books = useSelector((state) => state.books.all);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (titleT !== '' && authorT !== '') {
      dispatch(add({
        item_id: `item${books.length + 1}`,
        title: titleT,
        author: authorT,
        category: 'Fiction',
      }));
    }
  };

  return (
    <>
      <BookList />
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title of book:"
          onChange={
            (e) => setTitle(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Enter author of book:"
          onChange={
            (e) => setAuthor(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookForm;
