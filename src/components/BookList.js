import { useSelector } from 'react-redux';
import BookState from './BookState';

function BookList() {
  const books = useSelector((state) => state.books.all);
  return (
    <div>
      <h2>List of books</h2>
      <table>
        <tbody>
          {
              books.map(
                (book) => (
                  <BookState
                    key={book.item_id}
                    title={book.title}
                    author={book.author}
                    id={book.item_id}
                  />
                ),
              )
            }
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
