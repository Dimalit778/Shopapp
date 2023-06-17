import React, { useContext } from 'react';
import './navbar.css';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Store } from '../../context/Store';

const NavbarComp = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
        <Helmet>
          <title>Shopy</title>
        </Helmet>
        <Navbar.Brand>Shopy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  ">
            <Nav.Link as={Link} to="/" className="me-5">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/fligts" className="me-5">
              Fligts
            </Nav.Link>
            <Nav.Link as={Link} to="/hotels" className="me-5">
              Hotels
            </Nav.Link>
            <Nav.Link as={Link} to="/restaurants" className="me-5">
              Restaurants
            </Nav.Link>
            <Nav.Link as={Link} to="/carRent" className="me-5">
              Car rent
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signUp" className="me-2">
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="me-2">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
