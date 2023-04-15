import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';

import BookForm from './components/BookForm';
import Categories from './components/Categories';

function App() {
  return (
    <>

      <BrowserRouter>
        <h1>Awesome books</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Add of books | </Link>
            </li>
            <li>
              <Link to="/categories"> Categories  </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
