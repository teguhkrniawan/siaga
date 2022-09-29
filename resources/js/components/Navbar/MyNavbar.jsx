import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' className='nr-auto'>
                    <Nav>
                        <Nav.Link href='/'>Beranda</Nav.Link>
                        <Nav.Link href='/'>Peta Bencana</Nav.Link>
                        <Nav.Link href='/'>Tentang Kami</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button className='btn btn-outline-primary my-2 my-sm-0 text-white' type='button'>MASUK</Button>
            </Container>
        </Navbar>
    )
}

export default MyNavbar