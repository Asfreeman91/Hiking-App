import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {

  {/* NavBar contains links to the 3 pages (paths) and appears on all 3 pages */}

  return (
    <>
      <Navbar id="navbar" className="navbar fixed-top mb-40" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand id="navbar-brand" href="#home">O.A.</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;