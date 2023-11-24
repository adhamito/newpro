import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const state = useSelector((state) => state.handlecart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          LmahalAbenAmi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart (
              {state.length})
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
