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
      {isLoading && <p className="loading">Loading books...</p>}
      {!isLoading && (
        <div>
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
        </div>
      )}
    </div>
  );
}

export default BookList;
