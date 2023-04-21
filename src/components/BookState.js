import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { remove } from '../redux/books/booksSlice';

function BookState({ title, author, id }) {
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

BookState.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookState;
