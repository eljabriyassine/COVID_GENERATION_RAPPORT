import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/irisi.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-bg">
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container className="container-head">
          <Navbar>
            <Navbar.Brand href="/home">
              <img src={logo} alt="logo" style={{ height: '50px', width: '100px' }} />

            </Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="/home" className="list-item text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="list-item text-decoration-none">
                About
              </Link>
              <Link to="/service" className="list-item text-decoration-none">
                Service
              </Link>
              <Link to="/doctor" className="list-item text-decoration-none">
                doctor
              </Link>
              <Link to="/contact" className="list-item text-decoration-none">
                Contact
              </Link>
              <Link to="/covidCheck" type="button" className="btn btn-danger">
                CovidCheck
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
