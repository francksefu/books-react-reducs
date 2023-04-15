import { PropTypes } from 'prop-types';

function Books({ title, author }) {
  return (
    <tr>
      <td>
        title:
        { title }
        , author:
        { author }
      </td>
    </tr>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

function BookList() {
  const books = [
    { title: 'Marjori', author: 'Damien', id: 0 },
    { title: 'Revolte', author: 'Guy de cars', id: 1 },
    { title: 'black child', author: 'Kamara laye', id: 2 },
  ];
  return (
    <div>
      <h2>List of books</h2>
      <table>
        <tr>
          <th>title and Author</th>
        </tr>
        {books.map((book) => <Books key={book.id} title={book.title} author={book.author} />)}
      </table>
    </div>
  );
}

export default BookList;
