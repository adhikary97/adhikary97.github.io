import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavigation.scss';

const MainNavigation = () => {
  const [currentKey, setCurrentKey] = useState(1);
  const path = window.location.pathname;
  useEffect(() => {
    switch (path) {
      case '/about':
        setCurrentKey(3);
        break;
      case '/projects':
        setCurrentKey(2);
        break;
      default:
        setCurrentKey(1);
        break;
    }
  }, [path]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ padding: '10px', marginBottom: '20px' }}
    >
      <Navbar.Brand
        className="logo-font"
        as={Link}
        to="/"
        onClick={() => setCurrentKey(1)}
      >
        <h4 style={{ margin: '0' }}>Paras Adhikary</h4>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav
          className="justify-content-end"
          activeKey={currentKey}
          onSelect={(selectedKey) => {
            setCurrentKey(selectedKey);
          }}
        >
          <Nav.Link as={Link} eventKey={1} to="/">
            Links
          </Nav.Link>
          <Nav.Link as={Link} eventKey={2} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} eventKey={3} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
