import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/icons/logo-bw.png'
import './mynavbar.style.css'

const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand className="ml-4" href="#Home">
                    <img src={Logo} alt="My Portfolio logo" className="logo" />
                    {/* <p align="center" id="nav-title">BABLU KD</p> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Experience">Experience</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar
