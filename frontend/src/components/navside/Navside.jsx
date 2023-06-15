import React, { useState } from 'react';
import './navside.css';
import { Button, Nav } from 'react-bootstrap';

const Navside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [item, setItem] = useState('');

  const handleClick = () => {
    setItem(input);
    setInput('');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen ? (
        <div className="btnOpen mt-3  ">
          <Button className="sideBtn" onClick={toggleSidebar}>
            <div>
              <p>S</p>
              <p>E</p>
              <p>A</p>
              <p>R</p>
              <p>C</p>
              <p>H</p>
            </div>
          </Button>
        </div>
      ) : (
        ''
      )}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Nav className="flex-column mb-5">
          <Button className="sideBtn" onClick={toggleSidebar}>
            Search
          </Button>
          <div>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
            />
            <button onClick={handleClick}>find</button>
          </div>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Navside;
