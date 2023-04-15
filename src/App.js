import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';

import BookForm from './components/BookForm';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
