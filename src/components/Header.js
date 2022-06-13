import React from 'react'
import { Navbar,Container } from 'react-bootstrap';

const Header = () => {
    return (
         <Navbar bg="dark" variant="dark" style={{ height:80 }}>
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
        </Container>
</Navbar>

    );
}

export default Header
