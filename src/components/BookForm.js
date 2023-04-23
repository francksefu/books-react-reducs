import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { getbook, sendbook } from '../redux/books/booksSlice';
import BookList from './BookList';
import phot from '../phot.png';

function BookForm() {
  const [titleT, setTitle] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titleT !== '') {
      await dispatch(sendbook({
        item_id: uuid(),
        title: titleT,
        author: 'franck sefu',
        category: 'Fiction',
      }));

      await dispatch(getbook());
    }
    setTitle('');
  };

  return (
    <div className="bookstore-cms">
      <div className="panel-bg">
        <div className="panel">
          <div className="left">
            <h2>Bookstore CMS</h2>
            <h3 className="first">BOOKS</h3>
            <h3 className="seconde">CATEGORIES</h3>
          </div>
          <img src={phot} alt="contact" className="oval" />
        </div>
        <BookList />
        <span className="line-long"> </span>
        <h2 className="add">ADD BOOKS</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title of book:"
            value={titleT}
            onChange={
              (e) => setTitle(e.target.value)
            }
          />

          <select className="select">
            <option selected>Category</option>
          </select>
          <button className="send" type="submit"><span className="inner">ADD BOOK</span></button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
