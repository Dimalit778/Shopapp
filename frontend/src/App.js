import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';

import NotFound from './Pages/NotFound/NotFound';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Product from './Pages/Product/Product';
import ProductsList from './Pages/Products/ProductsList';
import Restaurants from './Pages/Restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/fligts" element={<About />} /> */}
          {/* <Route path="/hotels" element={} /> */}
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/carRent" element={<ProductsList />} />

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
