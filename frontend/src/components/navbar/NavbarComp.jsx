import './navbar.css';

import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
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
          <Navbar.Brand>Navbar Brand</Navbar.Brand>
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
                  to="/games"
                >
                  Games
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
