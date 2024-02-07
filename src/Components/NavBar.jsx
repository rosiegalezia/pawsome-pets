import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home" className='logo'>PAWSOME PETS</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Dog Breeds</Nav.Link>
        <Nav.Link href="#pricing">Name Generator</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
export default NavBar;