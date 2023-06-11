import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import NavbarComp from './components/navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Games from './Pages/games/Games';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Gamepage from './Pages/GamePage/Gamepage';

function App() {
  return (
    <div className="App ">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />}>
            <Route path="/games/:id" element={<Gamepage />} />
          </Route>
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
