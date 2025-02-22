import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from "react-router"

function NavBar () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Tiendita</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/category/beauty">beauty</Nav.Link>
          <Nav.Link as={Link} to="/category/fragrances">fragrances</Nav.Link>
          <Nav.Link as={Link} to="/category/furniture">furniture</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>  
  )
}

export default NavBar
