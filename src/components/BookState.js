import { useState } from 'react';

function BookState() {
  const [bookstate, setBookstate] = useState({});
  return (
    <button type="button" onClick={setBookstate}>
      Delete
      {bookstate}
    </button>
  );
}

export default BookState;
