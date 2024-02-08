import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import ReactDOM from 'react-dom'
import Logo from "../assets/logo-one-line.svg"


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img src={Logo} alt="" className='navbar-logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="#Info">Dog Breeds Info</Nav.Link>
            <Nav.Link href="#GenerateName">Name Generator</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;