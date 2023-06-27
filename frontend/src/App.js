import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Restaurants from './Pages/Restaurants/Restaurants';
import HotelsList from './Pages/Hotels/HotelsList';
import Hotels from './Pages/Hotels/Hotels';

function App() {
  return (
    <div className="App min-vh-100">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/fligts" element={<About />} /> */}

          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/hotels" element={<HotelsList />} />

          {/* <Route path="/products/product/:id" element={<Product />} /> */}

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
