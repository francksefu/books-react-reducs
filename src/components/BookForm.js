import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/books/booksSlice';

function Books({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <h2>
          { title }
        </h2>
        <p>
          { author }
        </p>
        <button type="button" onClick={() => { dispatch(remove(id)); }} className="nothing">remove item</button>
      </td>
    </tr>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function BookForm() {
  const books = useSelector((state) => state.books.all);
  const [titleT, setTitle] = useState('');
  const [authorT, setAuthor] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (titleT !== '' && authorT !== '') {
      dispatch(add({
        item_id: `item${books.length}`,
        title: titleT,
        author: authorT,
        category: 'Fiction',
      }));
    }
  };

  return (
    <>
      <div>
        <h2>List of books</h2>
        <table>
          {
            books.map(
              (book) => (
                <Books
                  key={book.item_id}
                  title={book.title}
                  author={book.author}
                  id={book.item_id}
                />
              ),
            )
          }
        </table>
      </div>
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
