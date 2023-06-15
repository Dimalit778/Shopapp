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
            {/* <LinkContainer> */}
            <Nav.Link as={Link} to="/" className="me-5">
              Home
            </Nav.Link>
            {/* </LinkContainer> */}
            <Nav.Link as={Link} to="/about" className="me-5">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="me-5">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="me-5">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="me-5">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.length}
                </Badge>
              )}
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
