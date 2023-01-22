import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import React, {useState} from "react";
import "../style/style.scss";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from "./Dropdown";


const Navigation = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
      <Container>
        <NavbarBrand >
            <h4 style={{ fontWeight:700 }}>Company</h4>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">

        <NavDropdown
              id="nav-dropdown-example"
              title="ABOUT"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.2">
                HISTORY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VISSION MISSION</NavDropdown.Item>
            </NavDropdown>
            
          <Nav.Link id="about" onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
            ABOUT
          {dropdown && <Dropdown/>}
          </Nav.Link>
          <Nav.Link>OUR WORK</Nav.Link>
          <Nav.Link>OUR TEAM</Nav.Link>
          <Nav.Link>CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
};
export default Navigation;
