import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getbook } from '../redux/books/booksSlice';
import phot from '../phot2.png';

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
    <div className="lesson">
      <div className="encad-one">
        <span className="action">Action</span>
        <span className="title">
          { title }
        </span>
        <span className="author">
          { author }
        </span>
        <span className="but">Comments</span>
        <span className="line"> </span>
        <buton type="button" className="but" onClick={() => { removeBook(id); }}>Remove</buton>
        <span className="line"> </span>
        <span className="but">Edit</span>
      </div>
      <div className="encad-2">
        <img src={phot} alt="contact" className="oval-2" />
        <div className="chiffre">
          <span className="percent"> 64% </span>
          <span className="complete"> completed </span>
        </div>
      </div>
      <div className="line-big"> </div>
      <div className="encad-3">
        <span className="current"> CURRENT CHAPTER</span>
        <span className="current-lesson"> Chap3:&quot;A lesson Learned&quot;</span>
        <div className="rectangle">
          <span className="update">UPDATE PROGRESS</span>
        </div>
      </div>
    </div>
  );
}

BookState.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookState;
