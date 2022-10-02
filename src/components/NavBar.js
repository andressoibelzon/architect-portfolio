import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

// import {GoMarkGithub} from 'react-icons/go'
// import { GrLinkedinOption } from 'react-icons/gr'



export const NavBar = () => {

  return (
    <Navbar expand="md" >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link to="/" href="/" className='navbar-link' >Inicio</Nav.Link>
            <Nav.Link to="/services" href="/services" className='navbar-link'>Servicios</Nav.Link>
            <Nav.Link to="/courses" href="/courses" className='navbar-link'>Cursos</Nav.Link>
            <Nav.Link to="/contact" href="/contact" className='navbar-link'>Contacto</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <a href='mailto:a.soibelzon@gmail.com' target="_blank"><button className='vvd' onClick={() => console.log('connect')}><span>Conecta</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

