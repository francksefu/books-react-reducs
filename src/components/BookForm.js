import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { getbook, sendbook } from '../redux/books/booksSlice';
import BookList from './BookList';

function BookForm() {
  const [titleT, setTitle] = useState('');
  const [authorT, setAuthor] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titleT !== '' && authorT !== '') {
      await dispatch(sendbook({
        item_id: uuid(),
        title: titleT,
        author: authorT,
        category: 'Fiction',
      }));

      await dispatch(getbook());
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <BookList />
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title of book:"
          value={titleT}
          onChange={
            (e) => setTitle(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Enter author of book:"
          value={authorT}
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
