import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-play"></i> Media Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header