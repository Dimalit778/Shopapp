import { useContext } from 'react';
import './navbar.css';

import { Navbar, Container, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Store } from '../../context/Store';

const NavbarComp = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className=" sticky-top"
      >
        <Container>
          <Helmet>
            <title>Luxury</title>
          </Helmet>

          <Navbar.Brand>Luxury</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="d-flex list-unstyled gap-2 ms-auto text-center">
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white"
                  to="/watches"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white"
                  to="/cart"
                >
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </li>
            </ul>
            <ul className=" d-flex list-unstyled gap-2 ms-auto text-center">
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white w-auto"
                  to="/login"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  className="links fw-bold text-decoration-none text-white w-auto"
                  to="/register"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    Sign up
                  </button>
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
