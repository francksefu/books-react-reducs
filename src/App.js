import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';

import BookForm from './components/BookForm';
import Categories from './components/Categories';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
