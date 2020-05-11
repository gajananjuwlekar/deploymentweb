
    
    import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function MenuBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Master" class="small" id="basic-nav-dropdown">
             
      
      <NavDropdown.Item className="text-uppercase small" href='/deployment'>
        Deployment
      </NavDropdown.Item>
    
        </NavDropdown> 
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
