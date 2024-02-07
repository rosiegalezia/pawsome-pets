import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'



function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/" className='logo'><FontAwesomeIcon icon={faPaw} />PAWSOME PETS</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#Info">Dog Breeds</Nav.Link>
        <Nav.Link href="#GenerateName">Name Generator</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
export default NavBar;