import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getbook } from '../redux/books/booksSlice';
import BookState from './BookState';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.all);
  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(getbook());
  }, [dispatch]);

  return (
    <div>
      <h2>List of books</h2>
      {isLoading && <p className="loading">Loading books...</p>}
      {!isLoading && (
      <table>
        <tbody>
          {
              books.map(
                (book) => (
                  <BookState
                    key={book.itemId}
                    title={book.title}
                    author={book.author}
                    id={book.itemId}
                  />
                ),
              )
            }
        </tbody>
      </table>
      )}
    </div>
  );
}

export default BookList;
