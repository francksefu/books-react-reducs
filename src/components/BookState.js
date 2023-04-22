import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getbook } from '../redux/books/booksSlice';

function BookState({
  title, author, id,
}) {
  const dispatch = useDispatch();
  const removeBook = async (id) => {
    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net';
    try {
      await axios.delete(`${url}/bookstoreApi/apps/XGpFs782LEwopzLyeLb1/books/${id}`);
      dispatch(getbook());
    } catch (error) {
      throw new Error('error');
    }
  };
  return (
    <tr>
      <td>
        <h2>
          { title }
        </h2>
        <p>
          { author }
        </p>
        <button type="button" onClick={() => { removeBook(id); }} className="nothing">remove item</button>
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
