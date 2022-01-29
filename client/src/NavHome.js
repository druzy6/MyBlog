import React from 'react';
import './NavHome.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavHome(){

  return(
      <Navbar expand="lg" className="navbar-cus">
        <Container>
        <Nav className="me-auto">
          <Navbar.Brand >Roy's blog</Navbar.Brand>
          <Nav.Link >
            <Link to="/" className="link"> Home </Link>
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavHome;
