import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Product from './Pages/Product/Product';
import ProductsList from './Pages/Products/ProductsList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/product/:id" element={<Product />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
