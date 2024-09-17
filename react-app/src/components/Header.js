import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Buscador from './Buscador'

function Header() {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">

    <Container>
    <Navbar.Brand to="/">React app Movies </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listado">Listado</Nav.Link>
            </Nav>
            <Buscador/>
    </Container>
     </Navbar>
    </>

  )
}

export default Header