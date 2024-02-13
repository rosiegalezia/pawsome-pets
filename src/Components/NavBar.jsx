import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import ReactDOM from 'react-dom'
import Logo from "../assets/logo-one-line.svg"
import '../Components/Components.css'

function NavBar() {

  // return an object containing current path name
  let location = useLocation()

  return (
    <Navbar expand="lg" className="bg-cream">
      <Container className=''>
        <Link to="/">
          <img src={Logo} alt="" className='navbar-logo p-2' />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Adds active state when eventkey matches location path */}
          <Nav className="ms-auto" activeKey={location.pathname}>
            <Nav.Link href="#/" eventKey={"/"}>Home</Nav.Link>
            <Nav.Link href="#Info" eventKey={"/Info"}>Pet Breeds</Nav.Link>
            <Nav.Link href="#GenerateName" eventKey={"/GenerateName"}>Name Generator</Nav.Link>
            <Nav.Link href="#Favourites" eventKey={"/Favourites"}>Favourites</Nav.Link>
            <Nav.Link href="#About" eventKey={"/About"}>About</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;